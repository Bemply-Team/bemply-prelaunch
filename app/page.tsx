"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWaitlist } from "@/context/waitlist-context";

export default function Home() {
  const router = useRouter();
  const { isLoading } = useWaitlist();

  useEffect(() => {
    if (!isLoading) {
      // Always redirect to how-soon page
      router.push("/how-soon");
    }
  }, [isLoading, router]);

  // Loading state while checking waitlist status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-teal-400 to-purple-400">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // This will briefly show while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-teal-400 to-purple-400">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
