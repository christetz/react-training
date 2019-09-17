import * as React from 'react';
import { useEffect, useState } from 'react';

interface ChuckNorrisQuoteProps {
  url?: string;
}

export function ChuckNorrisQuote({
  url = 'https://api.chucknorris.io/jokes/random',
}: ChuckNorrisQuoteProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [quoteText, setQuoteText] = useState('');

  useEffect(() => {
    fetchQuote(url);
  }, []);

  async function fetchQuote(url: string) {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setQuoteText(data.value);
    setIsLoading(false);
  }

  return (
    <>
      <button onClick={() => fetchQuote(url)}>Reload</button>
      <div>
        {isLoading && <h1>loading...</h1>}
        {quoteText && <h1>{quoteText}</h1>}
      </div>
    </>
  );
}
