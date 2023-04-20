const nodemailer = require("nodemailer");

interface MailData {
  from: string;
  to: string | undefined;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}

interface Body {
  name: string;
  email: string;
  message: string;
}

interface Request {
  body: Body;
}

interface Response {
  send: (data: any) => void;
}

interface Error {
  send: (data: any) => void;
}

const user = process.env.USER_MAIL;
const pass = process.env.USER_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: user,
    pass: pass,
  },
});

export default function sendEmail(req: Request, res: Response) {
  const { name, email, message } = req.body;

  const mailData: MailData = {
    from: `"Maurício Renck Gedrat" <${user}>`,
    to: process.env.USER_MAIL,
    replyTo: email,
    subject: "Contato através do site",
    text: message,
    html: `<b>${name}</b><br/><p>${message}</p>`,
  };

  transporter
    .sendMail(mailData)
    .then((response: Response) => {
      res.send(response);
    })
    .catch((error: Error) => {
      res.send(error);
    });
}
