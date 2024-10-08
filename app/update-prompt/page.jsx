import { Suspense } from "react";
import EditPrompt from "@components/EditPrompt";

export default function UpdatePromptPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
}
