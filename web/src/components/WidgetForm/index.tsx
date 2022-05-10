import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import { FEEDBACK_TYPES } from "../../mocks";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export type FeedbackType = keyof typeof FEEDBACK_TYPES;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onRestartFeedbackRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {feedbackType ? (
            <FeedbackContentStep
              onRestartFeedbackRequested={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={setFeedbackSent}
            />
          ) : (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          )}
        </>
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
