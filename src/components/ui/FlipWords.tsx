import dynamic from 'next/dynamic';
import FlipWordsSSR from './FlipWordsSSR';

const FlipWordsClient = dynamic(() => import('./FlipWordsClient'), {
  ssr: false,
});

interface FlipWordsProps {
  words: string[];
  className?: string;
}

const FlipWords = ({ words, className }: FlipWordsProps) => {
  return (
    <>
      <noscript>
        <FlipWordsSSR words={words} className={className} />
      </noscript>
      <FlipWordsClient words={words} className={className} />
      <style jsx>{`
        noscript + div {
          display: none;
        }
        @media (max-width: 767px) {
          noscript + div {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default FlipWords;
