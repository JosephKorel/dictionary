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
  const [storedWords, setStoredWords] = useState();
  const [onlyNoun, setOnlyNoun] = useState([]);
  const [onlyVerb, setOnlyVerb] = useState([]);
  const [onlyAdj, setOnlyAdj] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );

      setError(false);
      setWord(data.data);
      /* console.log(word[0].phonetic.map((item) => item.text)); */
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
      ></Input>
      {meaning.length != 0 ? (
        <div>
          <List
            input={input}
            meaning={meaning}
            error={error}
            example={example}
            saveword={saveword}
            onlyNoun={onlyNoun}
            onlyVerb={onlyVerb}
            onlyAdj={onlyAdj}
            setSaveword={setSaveword}
            lastinput={lastinput}
            setLastinput={setLastinput}
            setOnlyNoun={setOnlyNoun}
            setOnlyVerb={setOnlyVerb}
            setOnlyAdj={setOnlyAdj}
            storedWords={storedWords}
            setStoredWords={setStoredWords}
          ></List>
          <Phonetics error={error} word={word} input={input}></Phonetics>
        </div>
      ) : (
        <h1 className="text-center">
          {error == false || input == ""
            ? "Why don't you type something?"
            : "No result was found"}
        </h1>
      )}
      <Counter
        word={word}
        setWord={setWord}
        input={input}
        setInput={setInput}
        setExample={setExample}
        setMeaning={setMeaning}
        error={error}
      ></Counter>
      <SavedWords
        lastinput={lastinput}
        saveword={saveword}
        meaning={meaning}
        onlyNoun={onlyNoun}
        onlyVerb={onlyVerb}
        onlyAdj={onlyAdj}
        setOnlyNoun={setOnlyNoun}
        setOnlyVerb={setOnlyVerb}
        setOnlyAdj={setOnlyAdj}
        setSaveword={setSaveword}
        storedWords={storedWords}
        setStoredWords={setStoredWords}
      ></SavedWords>
    </div>
  );
}

export default Main;
