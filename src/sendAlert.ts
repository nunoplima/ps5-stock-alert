import { formatISO } from "date-fns";
import { createReadStream } from "fs";
import { Page } from "playwright";
import { getEnvVar } from "./utils";
const telegram = require("telegram-bot-api");
const twilio = require("twilio")

const telegramClient = new telegram({
  token: process.env.TELEGRAM_BOT_TOKEN,
});

const twilioClient = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

const sendTwilioMessage = async (message: string): Promise<void> => {
  if (!twilioClient) return;

  try {
    const payload = {
      body: message,
      messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_ID,
      to: process.env.SMS_TO,
    };
    await twilioClient.messages.create(payload);
    console.log(message);
  } catch {
    throw new Error('Oops somethings went wrong with the Twilio msg');
  }
};

const sendTelegramMessage = async (message: string, path: string): Promise<void> => {
  if (!telegramClient) return;

  try {
    const payload = {
      chat_id: getEnvVar("TELEGRAM_CHAT_ID"),
      caption: message,
      photo: createReadStream(path),
    };

    await telegramClient.sendPhoto(payload)
    console.log(message)
  } catch {
    throw new Error('Oops somethings went wrong with the Telegram msg');
  }
}

export const sendAlert = async (
  message: string,
  page: Page
): Promise<void> => {
  const path = `screenshots/screenshot-${formatISO(new Date())}.png`;
  await page.screenshot({
    path,
  });

  await Promise.all([
    sendTelegramMessage(message, path),
    sendTwilioMessage(message),
  ]);
};
