import express, { Request } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { ShowFeedbacksUseCase } from "./use-cases/show-feedbacks-use-case";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

interface Feedback {
  type: string;
  comment: string;
  screenshot?: string | null;
}
interface FeedbackResponse {
  data: Feedback;
}

export const routes = express.Router();
const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
const nodemailerMailAdapter = new NodemailerMailAdapter();

routes.post(
  "/feedbacks",
  async (request: Request<{}, FeedbackResponse, Feedback>, response) => {
    const { type, comment, screenshot } = request.body;

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return response.status(201).json({ data: { type, comment, screenshot } });
  }
);

routes.get("/feedbacks", async (_request, response) => {
  const showFeedbacksUseCase = new ShowFeedbacksUseCase(
    prismaFeedbacksRepository
  );

  const feedbacks = await showFeedbacksUseCase.execute();
  return response.status(201).json(feedbacks);
});
