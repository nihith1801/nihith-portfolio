import { cn } from "../../../lib/utils";

interface FlipWordsSSRProps {
  words: string[];
  className?: string;
}

const FlipWordsSSR = ({ words, className }: FlipWordsSSRProps) => {
  return (
    <span
      className={cn(
        "inline-block relative text-left text-neutral-900 dark:text-neutral-100",
        className
      )}
    >
      {words[0]}
    </span>
  );
};

export default FlipWordsSSR;
