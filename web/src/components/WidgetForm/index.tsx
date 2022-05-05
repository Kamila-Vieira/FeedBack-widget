import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import { FEEDBACK_TYPES } from "../../mocks";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export type FeedbackType = keyof typeof FEEDBACK_TYPES;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handlerRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          onRestartFeedbackRequested={handlerRestartFeedback}
          feedbackType={feedbackType}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.rocketseat.com.br/"
          target="_blank"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
