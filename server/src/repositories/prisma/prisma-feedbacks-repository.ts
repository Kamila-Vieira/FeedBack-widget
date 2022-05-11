import { prisma } from "../../prisma";
import {
  FeedbacksRepositoryData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbacksRepositoryData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }

  async show() {
    return await prisma.feedback.findMany();
  }
}
