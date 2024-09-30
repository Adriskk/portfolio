"use client";

import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ContactFormValues } from "@/components/ContactForm/ContactForm";
import { Variants, motion, AnimatePresence } from "framer-motion";

type InputProps = {
  register: UseFormRegister<ContactFormValues>;
  placeholder: string;
  name: "name" | "mail" | "message";
  error?: FieldError;
  isTextarea?: boolean;
  required?: boolean;
};

const Input = ({
  placeholder,
  register,
  error,
  name,
  isTextarea,
  required = false,
}: InputProps) => {
  const clx: ClassValue =
    "w-full border-b border-secondary/50 max-w-[700px] py-4 text-xl outline-none text-primary placeholder:transition-all" +
    " placeholder:duration-200 focus:placeholder:pl-5 focus:placeholder:text-primary";

  const ErrorVariants: Variants = {
    initial: {
      x: -5,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
    exit: {
      x: 5,
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full">
      {!isTextarea ? (
        <div className="w-full">
          <input
            type={name === "mail" ? name : "text"}
            {...register(name, { required })}
            placeholder={placeholder}
            className={cn(clx, {
              "border-rose-700": error,
            })}
          />
          <AnimatePresence mode="wait" initial={false}>
            {error && (
              <motion.small
                variants={ErrorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-light text-rose-700 mt-1 inline-block relative"
              >
                {error.message}
              </motion.small>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <div className="w-full">
          <textarea
            {...register(name, { required })}
            placeholder={placeholder}
            className={cn(clx, "max-h-[300px] h-[180px] min-h-[180px]", {
              "border-rose-700": error,
            })}
          />
          <AnimatePresence mode="wait" initial={false}>
            {error && (
              <motion.small
                variants={ErrorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-light text-rose-700 mt-1 inline-block relative"
              >
                {error.message}
              </motion.small>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Input;
