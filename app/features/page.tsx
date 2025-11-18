"use client";

import SharedLayout from "@/components/shared-layout";
import SharedNavigation from "@/components/shared-navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NotifyButton from "@/components/notify-button";

export default function FeaturesPage() {
  const router = useRouter();

  const handleNotifyClick = () => {
    router.push("/waitlist");
  };

  return (
    <SharedLayout variant="compact" showFooter={true}>
      {/* Navigation - Fixed height */}
      <div className="flex-shrink-0">
        <SharedNavigation logoPosition="center" showLogo variant="default" />
      </div>

      {/* Scrollable Content Container - Flexible height */}
      <div className="flex-1 overflow-y-auto pr-4 mt-4 lg:mt-6 min-h-0">
        {/* Welcome Message - Left aligned */}
        <div className="text-left mb-4 lg:mb-6">
          <h2
            style={{ wordSpacing: "0.2rem" }}
            className="font-cuprum text-gray-800 font-semibold text-lg  md:text-xl xl:text-2xl  tracking-wider   leading-tight"
          >
            Welcome to Bemply — Where Belonging Meets Opportunity.
          </h2>
        </div>

        {/* Features Title - Left aligned */}
        <div className="text-left mb-4 lg:mb-6 md:mt-12">
          <h1 className="font-cuprum font-bold text-gray-900  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            FEATURES YOU'LL ACTUALLY USE
          </h1>
          <p className="font-cuprum text-gray-800  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
            (And some you never knew you needed.)
          </p>
        </div>

        {/* Features Content - Left aligned with consistent spacing */}
        <div className="space-y-4 text-left">
          {/* Feature I */}
          <div>
            <h3 className="font-cuprum font-bold  text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              I. Security-First Onboarding
            </h3>
            <p className="font-cuprum text-gray-800   text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              All organizations go through AI-powered verification before
              joining.
            </p>
            <p className="font-cuprum text-gray-800  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              No shady actors. No fake job offers. Just trusted opportunities.
            </p>
          </div>

          {/* Feature II */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900  text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              II. Smart AI Matching
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Our AI doesn't just show jobs or applicants — it shows you the
              best fit, with a match % and a clear explanation of why.
            </p>
          </div>

          {/* Feature III */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              III. Company Boards
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Every organization gets a public-facing profile with real reviews,
              team info, job posts, and ratings — and can't fake a thing.
            </p>
          </div>

          {/* Feature IV */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              IV. Applicant Insights for Recruiters
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              See who applied, how well they match, and manage rounds with
              transparency. Structured reviews, required feedback on rejections,
              and smart interview scheduling tools are all built in.
            </p>
          </div>

          {/* Feature V */}
          <div>
            <h3 className="font-cuprum font-bold text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              V. Bemply Conference (Premium)
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Schedule live interviews and meetings directly from your dashboard
              — fully integrated and optimized for hiring.
            </p>
          </div>

          {/* Feature VI */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              VI. In-Message Communication
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Companies can message candidates (all plans). Candidates can reply
              — but never get spammed.
            </p>
          </div>

          {/* Feature VII */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              VII. Watchlist & Dashboard for Candidates
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Keep track of your applications, get notified about next steps,
              and never miss a deadline again.
            </p>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Set jobs aside for later with your personalized "Watchlist."
            </p>
          </div>

          {/* Feature VIII */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              VIII. For Internships Too
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Universities and research labs can post internships and connect
              with early talent. Same tools, same protections.
            </p>
          </div>

          {/* Feature IX */}
          <div>
            <h3 className="font-cuprum font-bold text-gray-900 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              IX. Widget-Powered Dashboards
            </h3>
            <p className="font-cuprum text-gray-800 text-md md:text-lg lg:text-xl leading-tight tracking-wide">
              Customize your experience. Visualize stats. Track progress. Make
              your space yours.
            </p>
          </div>
        </div>
      </div>

      {/* Notify Me Button - Fixed at bottom */}
      <NotifyButton />
    </SharedLayout>
  );
}
