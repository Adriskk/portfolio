import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type MaxWidthWrapperProps = {
  className?: ClassValue;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({
  className = "",
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "min-h-[100svh] mx-auto w-full p-2 px-3 py-4 md:px-4 lg:px-14 lg:py-8",
        className!
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
