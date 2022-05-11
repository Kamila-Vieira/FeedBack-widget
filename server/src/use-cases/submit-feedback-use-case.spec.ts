import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const showFeedbackSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy, show: showFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "safasf",
        screenshot: "data:image/png;base64/test.jpg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
    expect(showFeedbackSpy).not.toHaveBeenCalled();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "safasf",
        screenshot: "data:image/png;base64/test.jpg",
      })
    ).rejects.toThrow("Type is required.");
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64/test.jpg",
      })
    ).rejects.toThrow("Comment is required.");
  });

  it("should not be able to submit a feedback without valid screenshot source", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "sdfsdf",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow("Invalid screenshot format.");
  });
});
