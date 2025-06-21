"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import Toast from "./components/toast";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { apiService, type ContactData } from "@/services/api";

// Validation schema
const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  companyName: Yup.string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters")
    .required("Company name is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .required("Message is required"),
});

interface ToastState {
  show: boolean;
  type: "success" | "error";
  message: string;
}

export default function ContactsPage() {
  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "success",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (
    values: ContactData,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      // Check if reCAPTCHA is completed
      if (!recaptchaToken) {
        showToast("error", "Please complete the reCAPTCHA verification.");
        setSubmitting(false);
        return;
      }

      // Submit contact form using API service
      const response = await apiService.submitContact(values);

      if (response.success) {
        showToast("success", response.message);
        resetForm();
        setRecaptchaToken(null);
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        showToast("error", response.message);
      }
    } catch (error) {
      showToast(
        "error",
        "An unexpected error occurred. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <Toast
        show={toast.show}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />

      <SharedLayout variant="form" showFooter={true}>
        {/* Navigation - Fixed height */}
        <div className="flex-shrink-0">
          <SharedNavigation variant="default" />
        </div>

        {/* Contact Form Container - Flexible height with consistent structure */}
        <div className="mt-4 lg:mt-6 flex justify-center flex-1 min-h-0">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl relative flex flex-col">
            {/* Title - Fixed height */}
            <div className="flex-shrink-0 mb-3 lg:mb-4 xl:mb-6">
              <h1
                className="font-cousine font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center"
                style={{ color: "#5741FF" }}
              >
                Any Questions ? Contact Us
              </h1>
            </div>

            {/* Form - Flexible height */}
            <div className="flex-1 min-h-0">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  companyName: "",
                  message: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form className="space-y-2 lg:space-y-3 h-full flex flex-col">
                    {/* Form Fields Container - Flexible height */}
                    <div className="flex-1 space-y-2 lg:space-y-3">
                      {/* First Row - First Name & Last Name */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            First name
                          </label>
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Jane"
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.firstName && touched.firstName
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Last name
                          </label>
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Smitherton"
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.lastName && touched.lastName
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>
                      </div>

                      {/* Second Row - Email & Company Name */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email address
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@janesfakedomain.net"
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.email && touched.email
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="companyName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Company Name
                          </label>
                          <Field
                            type="text"
                            id="companyName"
                            name="companyName"
                            placeholder="FakeDomain"
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.companyName && touched.companyName
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="companyName"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your message
                        </label>
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          rows={3}
                          placeholder="Enter your question or message"
                          className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none ${
                            errors.message && touched.message
                              ? "border-red-400 focus:border-red-500"
                              : "border-white/50 focus:border-blue-400"
                          }`}
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="mt-1 text-xs text-red-600 font-medium"
                        />
                      </div>

                      {/* reCAPTCHA - Fixed height */}
                      <div className="w-full flex justify-center py-2">
                        <div className="w-max bg-white/80 backdrop-blur-sm rounded-lg p-2 flex justify-center">
                          <ReCAPTCHA
                            sitekey={
                              process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
                              "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            }
                            onChange={handleRecaptchaChange}
                            theme="light"
                            size="normal"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button - Fixed at bottom */}
                    <div className="pt-2 px-4 flex-shrink-0">
                      <button
                        type="submit"
                        disabled={isSubmitting || !recaptchaToken}
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-inter font-extrabold text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{ color: "#5741FF" }}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 md:bottom-8 md:left-10 lg:bottom-4 lg:left-6 xl:bottom-6 xl:left-8 flex items-center space-x-4 sm:space-x-5 lg:space-x-4 xl:space-x-5">
          <button className="hover:opacity-80 transition-opacity">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={18}
              height={18}
              className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
            />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <Image
              src="/icons/twitter.png"
              alt="Twitter"
              width={18}
              height={18}
              className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
            />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <Image
              src="/icons/tiktok.png"
              alt="TikTok"
              width={18}
              height={18}
              className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
            />
          </button>
          <button className="hover:opacity-80 transition-opacity">
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={18}
              height={18}
              className="sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
            />
          </button>
        </div>

        {/* Logo - Positioned at bottom right */}
        <div className="hidden lg:block absolute bottom-12 right-6  ">
          <Image
            src="/bemply-logo.png"
            alt="Bemply Logo"
            width={180}
            height={54}
            className="h-20 w-auto opacity-80"
          />
        </div>
      </SharedLayout>
    </>
  );
}
