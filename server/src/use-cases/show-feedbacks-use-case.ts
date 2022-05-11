import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class ShowFeedbacksUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    return await this.feedbacksRepository.show();
  }
}
