import { ShowFeedbacksUseCase } from "./show-feedbacks-use-case";

const createFeedbackSpy = jest.fn();
const showFeedbackSpy = jest.fn();

describe("Show feedbacks", () => {
  it("should be able to show all feedbacks", async () => {
    const showFeedbacks = new ShowFeedbacksUseCase({
      create: createFeedbackSpy,
      show: showFeedbackSpy,
    });

    await expect(showFeedbacks.execute()).resolves.not.toThrow();
    expect(showFeedbackSpy).toHaveBeenCalled();
    expect(createFeedbackSpy).not.toHaveBeenCalled();
  });
});
