"use client";

import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import Toast from "./components/toast";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { apiService, type WaitlistData } from "@/services/api";
import { storageService } from "@/services/storage";
import { useWaitlist } from "@/context/waitlist-context";
import { useLanguage } from "@/context/language-context";

interface ToastState {
  show: boolean;
  type: "success" | "error";
  message: string;
}

export default function WaitlistPage() {
  const router = useRouter();
  const { refreshWaitlistData } = useWaitlist();
  const { t } = useLanguage();
  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "success",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string>("");
  const [isRecaptchaExpired, setIsRecaptchaExpired] = useState(false);
  const [recaptchaVerifiedAt, setRecaptchaVerifiedAt] = useState<number | null>(
    null
  );
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // 1 minute grace period in milliseconds
  const RECAPTCHA_GRACE_PERIOD = 60 * 1000;

  // Validation schema with translations
  const WaitlistSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(2, t("waitlist.validation.firstNameMin"))
      .max(50, t("waitlist.validation.firstNameMax"))
      .required(t("waitlist.validation.firstNameRequired")),
    last_name: Yup.string()
      .min(2, t("waitlist.validation.lastNameMin"))
      .max(50, t("waitlist.validation.lastNameMax"))
      .required(t("waitlist.validation.lastNameRequired")),
    email: Yup.string()
      .email(t("waitlist.validation.emailInvalid"))
      .required(t("waitlist.validation.emailRequired")),
    company: Yup.string()
      .min(2, t("waitlist.validation.companyMin"))
      .max(100, t("waitlist.validation.companyMax"))
      .required(t("waitlist.validation.companyRequired")),
    position: Yup.string()
      .min(2, t("waitlist.validation.positionMin"))
      .max(100, t("waitlist.validation.positionMax"))
      .required(t("waitlist.validation.positionRequired")),
    industry: Yup.string()
      .min(2, t("waitlist.validation.industryMin"))
      .max(100, t("waitlist.validation.industryMax"))
      .required(t("waitlist.validation.industryRequired")),
  });

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError("");
    setIsRecaptchaExpired(false);

    // Record verification time when token is received
    if (token) {
      setRecaptchaVerifiedAt(Date.now());
    } else {
      setRecaptchaVerifiedAt(null);
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    setIsRecaptchaExpired(true);
    setRecaptchaVerifiedAt(null);
    setRecaptchaError("reCAPTCHA has expired. Please verify again.");
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setRecaptchaError("reCAPTCHA verification failed. Please try again.");
    setRecaptchaVerifiedAt(null);
  };

  // Check if we're still within the grace period
  const isWithinGracePeriod = () => {
    if (!recaptchaVerifiedAt) return false;
    const timeElapsed = Date.now() - recaptchaVerifiedAt;
    return timeElapsed < RECAPTCHA_GRACE_PERIOD;
  };

  // Check if reCAPTCHA is considered valid (has token or within grace period)
  const isRecaptchaValid = () => {
    return recaptchaToken || isWithinGracePeriod();
  };

  const executeRecaptcha = async (): Promise<string | null> => {
    // If we have a valid token, use it
    if (recaptchaToken && !isRecaptchaExpired) {
      return recaptchaToken;
    }

    // If we're within grace period, try to execute invisibly first
    if (isWithinGracePeriod()) {
      try {
        if (recaptchaRef.current) {
          const token = await recaptchaRef.current.executeAsync();
          setRecaptchaToken(token);
          setRecaptchaError("");
          setIsRecaptchaExpired(false);
          return token;
        }
      } catch (error) {
        console.log(
          "Invisible reCAPTCHA execution failed, user will need to verify manually"
        );
      }
    }

    // If no token or expired, try to execute reCAPTCHA
    try {
      if (recaptchaRef.current) {
        const token = await recaptchaRef.current.executeAsync();
        setRecaptchaToken(token);
        setRecaptchaError("");
        setIsRecaptchaExpired(false);
        return token;
      }
    } catch (error) {
      console.error("reCAPTCHA execution failed:", error);
      setRecaptchaError(
        "reCAPTCHA verification failed. Please complete the verification manually."
      );
    }

    return null;
  };

  const handleSubmit = async (
    values: WaitlistData,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      // Try to get a valid reCAPTCHA token
      let validToken = recaptchaToken;

      // If no token but within grace period, try to get a fresh token
      if (!validToken && isWithinGracePeriod()) {
        validToken = await executeRecaptcha();
      }

      // If no token and not within grace period, try to execute reCAPTCHA
      if (!validToken && !isWithinGracePeriod()) {
        validToken = await executeRecaptcha();
      }

      // If still no token, show error but allow manual completion
      if (!validToken) {
        setRecaptchaError(t("waitlist.recaptchaRequired"));
        setSubmitting(false);
        return;
      }

      // Submit waitlist form using API service
      const response = await apiService.submitWaitlist({
        ...values,
        recaptcha: validToken,
      });

      if (response.success) {
        // Store waitlist data in localStorage
        storageService.storeWaitlistData(values);

        await refreshWaitlistData();

        // Reset reCAPTCHA and clear grace period
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        setRecaptchaError("");
        setIsRecaptchaExpired(false);
        setRecaptchaVerifiedAt(null);

        // Redirect to thank you page
        router.push("/thank-you");
      } else {
        showToast("error", response.message);
        // Reset reCAPTCHA on API error to allow retry
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        setIsRecaptchaExpired(false);
        setRecaptchaVerifiedAt(null);
      }
    } catch (error) {
      showToast("error", t("waitlist.errorMessage"));
      // Reset reCAPTCHA on unexpected error
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
      setIsRecaptchaExpired(false);
      setRecaptchaVerifiedAt(null);
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

        {/* Waitlist Form Container - Flexible height with consistent structure */}
        <div className="mt-4 lg:mt-6 flex justify-center flex-1 min-h-0">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl relative flex flex-col">
            {/* Title - Fixed height */}
            <div className="flex-shrink-0 mb-3 lg:mb-4 xl:mb-6">
              <h1
                className="font-cousine font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center"
                style={{ color: "#5741FF" }}
              >
                {t("waitlist.title")}
              </h1>
            </div>

            {/* Form - Flexible height */}
            <div className="flex-1 min-h-0">
              <Formik
                initialValues={{
                  first_name: "",
                  last_name: "",
                  email: "",
                  company: "",
                  position: "",
                  industry: "",
                  recaptcha: "",
                }}
                validationSchema={WaitlistSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, touched, setFieldValue }) => (
                  <Form className="space-y-2 lg:space-y-3 h-full flex flex-col">
                    {/* Form Fields Container - Flexible height */}
                    <div className="flex-1 space-y-2 lg:space-y-3">
                      {/* First Row - First Name & Last Name */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {t("waitlist.firstName")}
                          </label>
                          <Field
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder={t("waitlist.firstNamePlaceholder")}
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.first_name && touched.first_name
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {t("waitlist.lastName")}
                          </label>
                          <Field
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder={t("waitlist.lastNamePlaceholder")}
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.last_name && touched.last_name
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="last_name"
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
                            {t("waitlist.email")}
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t("waitlist.emailPlaceholder")}
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
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {t("waitlist.companyName")}
                          </label>
                          <Field
                            type="text"
                            id="company"
                            name="company"
                            placeholder={t("waitlist.companyNamePlaceholder")}
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.company && touched.company
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="company"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>
                      </div>

                      {/* Third Row - Position & Industry */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                        <div>
                          <label
                            htmlFor="position"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {t("waitlist.position")}
                          </label>
                          <Field
                            type="text"
                            id="position"
                            name="position"
                            placeholder={t("waitlist.positionPlaceholder")}
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.position && touched.position
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="position"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="industry"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {t("waitlist.industry")}
                          </label>
                          <Field
                            type="text"
                            id="industry"
                            name="industry"
                            placeholder={t("waitlist.industryPlaceholder")}
                            className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg border-2 bg-white/80 backdrop-blur-sm font-ag text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                              errors.industry && touched.industry
                                ? "border-red-400 focus:border-red-500"
                                : "border-white/50 focus:border-blue-400"
                            }`}
                          />
                          <ErrorMessage
                            name="industry"
                            component="div"
                            className="mt-1 text-xs text-red-600 font-medium"
                          />
                        </div>
                      </div>

                      {/* reCAPTCHA - Fixed height */}
                      <div className="w-full py-2">
                        <div className="w-max mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-2 flex justify-center">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={
                              process.env
                                .NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
                            }
                            onChange={handleRecaptchaChange}
                            onExpired={handleRecaptchaExpired}
                            onErrored={handleRecaptchaError}
                            theme="light"
                            size="normal"
                          />
                        </div>
                        {recaptchaError && (
                          <div className="mt-2 text-xs text-red-600 font-medium text-center">
                            {recaptchaError}
                          </div>
                        )}
                        {isRecaptchaExpired && !isWithinGracePeriod() && (
                          <div className="mt-2 text-xs text-amber-600 font-medium text-center">
                            {t("waitlist.recaptchaExpired")}
                          </div>
                        )}
                        {isWithinGracePeriod() && !recaptchaToken && (
                          <div className="mt-2 text-xs text-green-600 font-medium text-center">
                            ✓{" "}
                            {t("waitlist.recaptchaGracePeriod", {
                              seconds: Math.ceil(
                                (RECAPTCHA_GRACE_PERIOD -
                                  (Date.now() - (recaptchaVerifiedAt || 0))) /
                                  1000
                              ).toString(),
                            })}
                          </div>
                        )}
                        {recaptchaToken && (
                          <div className="mt-2 text-xs text-green-600 font-medium text-center">
                            ✓ {t("waitlist.recaptchaVerified")}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button - Fixed at bottom */}
                    <div className="pt-2 px-4 flex-shrink-0">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-inter font-extrabold text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        style={{ color: "#5741FF" }}
                      >
                        {isSubmitting
                          ? t("common.submitting")
                          : t("common.submit")}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* Social Icons - Optimized positioning */}
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

        {/* Logo - Optimized positioning */}
        <div className="hidden lg:block absolute right-6 bottom-12">
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
