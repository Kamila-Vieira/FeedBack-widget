import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType } from "..";
import { api } from "../../../libs/api";
import { FEEDBACK_TYPES } from "../../../mocks";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../../Loading";
import { ScreenshotButton } from "../ScreenshotButton";
interface FeedbackContentStepProps {
  onRestartFeedbackRequested: () => void;
  feedbackType: FeedbackType;
  onFeedbackSent: () => void;
}

interface FeedbackTypeData {
  type: FeedbackType;
  comment: string;
  screenshot: string | null;
}

export function FeedbackContentStep({
  onRestartFeedbackRequested,
  feedbackType,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const { image, title, placeholder } = FEEDBACK_TYPES[feedbackType];
  const [disableButton, setDisableButton] = useState(true);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    setIsSendingFeedback(true);
    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot,
      } as FeedbackTypeData);
      setIsSendingFeedback(false);
      onFeedbackSent();
    } catch (error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
  }

  function disableButtonsWithoutContent(textAreaValue: string) {
    textAreaValue.replace(/[\s]/g, "").length > 0
      ? setDisableButton(false)
      : setDisableButton(true);
  }

  function handleInputTextArea(event: FormEvent<HTMLTextAreaElement>) {
    const textAreaValue = event.currentTarget.value;
    disableButtonsWithoutContent(textAreaValue);
    setComment(textAreaValue);
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onRestartFeedbackRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.src} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          onInput={handleInputTextArea}
          placeholder={placeholder}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        />

        <footer className="flex gap-2 mt-[2.5px]">
          <ScreenshotButton
            screenshot={screenshot}
            onTookScreenshot={setScreenshot}
          />
          <button
            disabled={disableButton || isSendingFeedback}
            type="submit"
            className="disabled:opacity-50 disabled:hover:bg-brand-500 p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
