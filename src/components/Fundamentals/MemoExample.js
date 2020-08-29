import React, { useState, useEffect, memo } from "react";
import axios from 'axios';

// const ChildComponent = () => {
//   console.log("rendered");
//   return <p>HEEEY</p>;
// };

const ChildComponent = memo(() => {
  console.log("rendered");
  return <p>HEEEY</p>;
});

export default function MemoExample() {
  const [quote, setQuote] = useState("");

  const getAQuote = async () => {
    const { quote } = await axios.get("https://api.kanye.rest")
    .then((quote) => quote.data)

    setQuote(quote);
  };

  useEffect(() => {
    getAQuote();
  }, []);

  return (
    <main>
      <p>{quote}</p>
      <button onClick={getAQuote}>Get a new quote</button>
      <ChildComponent />
    </main>
  );
}