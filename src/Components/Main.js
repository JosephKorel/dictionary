import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Input from "./Input";
import Phonetics from "./Phonetic";
import List from "./WordList";

function Main() {
  const [input, setInput] = useState("");
  const [word, setWord] = useState([]);
  const [meaning, setMeaning] = useState([]);
  const [error, setError] = useState(false);
  const [example, setExample] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );

      setError(false);
      setWord(data.data);
    } catch (error) {
      setError(true);
      setMeaning([]);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [input]);

  return (
    <div>
      <Input
        input={input}
        setInput={setInput}
        word={word}
        meaning={meaning}
        setMeaning={setMeaning}
        example={example}
        setExample={setExample}
        error={error}
      ></Input>
      {meaning.length != 0 ? (
        <div>
          <List
            input={input}
            meaning={meaning}
            error={error}
            example={example}
          ></List>
          <Phonetics error={error} word={word}></Phonetics>
        </div>
      ) : (
        <h1>
          {error == false || input == ""
            ? "Why don't you type something?"
            : "No result was found"}
        </h1>
      )}
      <h1>Paste a text and see the most frequent words</h1>
      <Counter
        word={word}
        setWord={setWord}
        input={input}
        setInput={setInput}
      ></Counter>
    </div>
  );
}

export default Main;
