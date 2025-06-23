"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";

export default function TermsPage() {
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
            Terms of Service
          </h1>
        </div>

        {/* Terms Content */}
        <div className="text-left space-y-4">
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              1. Acceptance of Terms
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              By accessing and using Bemply's services, you accept and agree to
              be bound by the terms and provision of this agreement. If you do
              not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              2. Use License
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              Permission is granted to temporarily download one copy of Bemply's
              materials for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <div className="ml-4 space-y-2">
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Modify or copy the materials
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Use the materials for any commercial purpose or for any public
                  display
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  Attempt to reverse engineer any software contained on Bemply's
                  platform
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              3. User Accounts
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              When you create an account with us, you must provide information
              that is accurate, complete, and current at all times. You are
              responsible for safeguarding the password and for all activities
              that occur under your account.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              4. Privacy Policy
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of the Service, to understand our
              practices.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              5. Prohibited Uses
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              You may not use our service:
            </p>
            <div className="ml-4 space-y-2">
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  For any unlawful purpose or to solicit others to perform
                  unlawful acts
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  To violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-cuprum text-gray-800 mr-2 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  •
                </span>
                <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
                  To transmit, or procure the sending of, any advertising or
                  promotional material without our prior written consent
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              6. Disclaimer
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              The materials on Bemply's platform are provided on an 'as is'
              basis. Bemply makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </div>

          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide mb-2">
              7. Contact Information
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              If you have any questions about these Terms of Service, please
              contact us through our contact page.
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
