import SharedLayout from "@/components/shared-layout";

import EarlyAccessPageContainer from "./components/EarlyAccessContainer";

import { redirect } from "next/navigation";

export default function EarlyAccessPage() {
  // redirect("/how-soon");

  return (
    <SharedLayout variant="default">
      <EarlyAccessPageContainer />
    </SharedLayout>
  );
}
