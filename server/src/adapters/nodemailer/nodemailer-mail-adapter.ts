import nodemailer from "nodemailer";

import { sendMailData, MailAdapter } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ed9aeaaef98340",
    pass: "ff5748efe7bbf4",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <equipe@feedget.com>",
      to: "Kamila Almeida <vkamila54@outlook.com>",
      subject,
      html: body,
    });
  }
}
