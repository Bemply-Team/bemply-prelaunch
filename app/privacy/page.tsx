"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";

export default function PrivacyPage() {
  return (
    <SharedLayout variant="compact" showFooter={true}>
      {/* Navigation - Fixed height */}
      <div className="flex-shrink-0">
        <SharedNavigation logoPosition="center" showLogo variant="default" />
      </div>

      {/* Scrollable Content Container - Flexible height */}
      <div className="flex-1 overflow-y-auto pr-4 mt-4 lg:mt-6 min-h-0">
        {/* Page Title */}
        <div className="text-left mb-6 lg:mb-8">
          <h1 className="font-cuprum font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl leading-tight tracking-wide mb-2">
            Privacy Policy
          </h1>
        </div>

        {/* Privacy Content */}
        <div className="text-left space-y-4">
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              1. Information We Collect
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              We collect information you provide directly to us, such as when
              you create an account, fill out a form, or contact us. This may
              include:
            </p>
            <div className="ml-4 space-y-2">
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Personal information such as name, email address, and contact
                  details
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Professional information including work history, skills, and
                  preferences
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Usage data and analytics to improve our services
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              2. How We Use Your Information
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              We use the information we collect to:
            </p>
            <div className="ml-4 space-y-2">
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Provide, maintain, and improve our services
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Match candidates with relevant opportunities using our
                  AI-powered system
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Communicate with you about our services and updates
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Ensure platform security and prevent fraud
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              3. Information Sharing
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share information with verified
              employers and organizations on our platform for legitimate hiring
              purposes only.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              4. Data Security
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. This includes encryption, secure
              servers, and regular security audits.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              5. Your Rights
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              You have the right to:
            </p>
            <div className="ml-4 space-y-2">
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Access, update, or delete your personal information
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Opt out of marketing communications
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Request a copy of your data or account deletion
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              6. Cookies and Tracking
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              We use cookies and similar tracking technologies to enhance your
              experience on our platform. You can control cookie settings
              through your browser preferences, though some features may not
              function properly if cookies are disabled.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              7. Changes to This Policy
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              8. Contact Us
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us through our contact page or email us
              directly.
            </p>
          </div>

          <div className="pt-4">
            <p className="font-cuprum text-gray-600 text-sm md:text-base lg:text-lg leading-tight tracking-wide">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
