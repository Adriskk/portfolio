type PhraseProps = {
  text: string;
};

const Phrase = ({ text }: PhraseProps) => {
  return (
    <div className="flex gap-5 items-center">
      <p
        className="font-anton uppercase"
        style={{ fontSize: "clamp(60px, 7.5vw, 260px)", lineHeight: 0.9 }}
      >
        {text}
      </p>
      <span className="relative h-[7.5vw] w-[7.5vw] overflow-hidden">
        <div className="h-full w-full stroke-[10]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 376 376"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_4_57)">
              <path
                d="M243.274 140.852L306.128 115.023L323.308 156.83L260.454 182.659L247.056 188.165L260.423 193.746L323.131 219.926L305.717 261.637L243.009 235.457L229.642 229.876L235.148 243.274L260.977 306.128L219.17 323.308L193.341 260.454L187.835 247.056L182.254 260.423L156.074 323.131L114.363 305.717L140.543 243.009L146.124 229.642L132.726 235.148L69.8726 260.977L52.6924 219.169L115.545 193.341L128.944 187.835L115.577 182.254L52.8687 156.074L70.2828 114.363L132.991 140.543L146.358 146.124L140.852 132.726L115.023 69.8724L156.831 52.6921L182.659 115.545L188.165 128.944L193.746 115.576L219.926 52.8686L261.637 70.2827L235.457 132.99L229.876 146.357L243.274 140.852Z"
                strokeWidth="16"
                className="stroke-background"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_57">
                <rect
                  width="286"
                  height="286"
                  fill="white"
                  transform="translate(111.132 0.945679) rotate(22.6603)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </span>
    </div>
  );
};

export default Phrase;
