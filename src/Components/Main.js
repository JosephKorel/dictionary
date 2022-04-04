import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Input from "./Input";
import Phonetics from "./Phonetic";
import SavedWords from "./SavedWords";
import List from "./WordList";

function Main() {
  const [input, setInput] = useState("");
  const [word, setWord] = useState([]);
  const [meaning, setMeaning] = useState([]);
  const [error, setError] = useState(false);
  const [example, setExample] = useState([]);
  const [saveword, setSaveword] = useState([]);
  const [lastinput, setLastinput] = useState([]);

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
        setMeaning={setMeaning}
        example={example}
        setExample={setExample}
        error={error}
        lastinput={lastinput}
        setLastinput={setLastinput}
      ></Input>
      {meaning.length != 0 ? (
        <div>
          <List
            input={input}
            meaning={meaning}
            error={error}
            example={example}
            saveword={saveword}
            setSaveword={setSaveword}
            lastinput={lastinput}
            setLastinput={setLastinput}
          ></List>
          <Phonetics error={error} word={word} input={input}></Phonetics>
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
        setExample={setExample}
        setMeaning={setMeaning}
        error={error}
      ></Counter>
      <SavedWords lastinput={lastinput} saveword={saveword}></SavedWords>
    </div>
  );
}

export default Main;
