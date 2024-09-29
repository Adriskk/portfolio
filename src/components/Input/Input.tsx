import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type InputProps = {
  placeholder: string;
  id: string;
  name: string;
  isTextarea?: boolean;
};

const Input = ({ placeholder, id, name, isTextarea }: InputProps) => {
  const clx: ClassValue =
    "w-full border-b border-secondary/50 max-w-[700px] py-4 text-xl outline-none text-primary placeholder:transition-all" +
    " placeholder:duration-200 focus:placeholder:pl-5 focus:placeholder:text-primary";

  return (
    <div className="w-full">
      {!isTextarea ? (
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          className={clx}
        />
      ) : (
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className={cn(clx, "max-h-[300px] h-[180px] min-h-[180px]")}
        />
      )}
    </div>
  );
};

export default Input;
