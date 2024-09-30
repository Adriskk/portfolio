import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer
      className="w-full bg-primary-dark h-[180px] relative md:h-[110px]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <MaxWidthWrapper className="bg-primary-dark min-h-[0vh] fixed h-[180px] bottom-0 md:h-[110px]">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="*:text-background flex flex-col items-center justify-center md:items-start">
            <span className="!text-secondary font-light md:text-sm">
              {new Date().getFullYear()} © Adrian Iskra
            </span>

            <span className="!text-secondary md:text-sm mt-1">
              Created with love.
            </span>
          </div>

          <div className="*:text-background flex flex-col items-center justify-center md:items-start">
            <span className="md:text-sm">Kielce/Wrocław, Poland</span>

            <span className="md:text-sm mt-1">
              {new Date().toLocaleTimeString("pl-PL", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZoneName: "short",
              })}
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
