"use server";

import twilio from "twilio";
import { ContactFormValues } from "@/components/ContactForm/ContactForm";

const accountSID = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_PHONE_FROM;
const toPhone = process.env.TWILIO_PHONE_TO;
const client = twilio(accountSID, authToken);

export type SendMessageResponse = {
  success: boolean;
};

export const sendMessage = async (
  data: ContactFormValues
): Promise<SendMessageResponse> => {
  try {
    const message = await client.messages.create({
      from: fromPhone,
      to: toPhone,
      body: `Nowa wiadomość wysłana z portfolio adrian-iskra.dev\n\n${data.name}\n${data.mail}\n\n${data.message}`,
    });
    console.log(message.status);
    if (["sent", "delivered", "accepted", "queued"].includes(message.status)) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (e) {
    console.error(e);
    return { success: false };
  }
};
