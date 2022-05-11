export interface sendMailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (data: sendMailData) => Promise<void>;
}
