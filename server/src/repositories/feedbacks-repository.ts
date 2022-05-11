export interface FeedbacksRepositoryData {
  type: string;
  comment: string;
  screenshot?: string | null;
}

export interface FeedbacksRepository {
  create: (data: FeedbacksRepositoryData) => Promise<void>;
  show: () => Promise<FeedbacksRepositoryData[]>;
}
