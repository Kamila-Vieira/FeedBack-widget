import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export class ShowFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository) {}

  async execute() {
    return await this.feedbacksRepository.show();
  }
}
