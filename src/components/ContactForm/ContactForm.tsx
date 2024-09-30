"use client";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { sendMessage } from "@/components/ContactForm/actions";

export interface ContactFormValues {
  name: string;
  mail: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required("This field is required."),
  mail: yup
    .string()
    .required("This field is required.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "This is not an e-mail."
    ),
  message: yup.string().required("This field is required."),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (
    values: ContactFormValues
  ) => {
    setIsLoading(true);
    setIsError(false);
    const response = await sendMessage(values);
    if (!response.success) {
      console.error("Error occurred. Try again later.");
      setIsError(true);
    } else {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {isError && (
        <small className="text-rose-700 text-[.9em]">
          An error occurred while sending your message :(
        </small>
      )}
      <div className="w-full flex flex-col gap-10">
        <Input
          register={register}
          name="name"
          placeholder="Your name *"
          error={errors.name}
          required
        />
        <Input
          register={register}
          name="mail"
          placeholder="Your e-mail *"
          error={errors.mail}
          required
        />
        <Input
          register={register}
          name="message"
          placeholder="Tell me a little about your idea *"
          error={errors.message}
          required
          isTextarea
        />
      </div>

      <div className="mt-8 w-full max-w-[700px] flex justify-end">
        <Button text="Send it" type="submit" isLoading={isLoading} />
      </div>
    </form>
  );
};

export default ContactForm;
