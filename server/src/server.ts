import express, { Request } from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import Feedback from "./typings/feedback";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ed9aeaaef98340",
    pass: "ff5748efe7bbf4",
  },
});

app.post(
  "/feedbacks",
  async (request: Request<{}, any, Feedback>, response) => {
    const { type, comment, screenshot } = request.body;

    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });

    transport.sendMail({
      from: "Equipe Feedget <equipe@feedget.com>",
      to: "Kamila Almeida <vkamila54@outlook.com>",
      subject: "Novo Feedback",
      html: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });

    return response.status(201).json({ data: feedback });
  }
);

app.get("/feedbacks", async (req, res) => {
  const feedbacks = await prisma.feedback.findMany();
  return res.json(feedbacks);
});

app.listen(3333, () => {
  console.log("HTTP server running on http://localhost:3333");
});
