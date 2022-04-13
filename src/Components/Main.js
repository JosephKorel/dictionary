import axios from "axios";
import React, { useEffect, useState } from "react";
import Text from "./TextField";
import Input from "./Input";
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

  useEffect(() => {
    document.body.classList.add("bg-[#212121]");
  }, []);

  const [teste, setTeste] = useState({
    id: Math.random(),
    word: "",
    meaning: [],
  });

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
      <Input input={input} setInput={setInput}></Input>
      {meaning.length != 0 ? (
        <div>
          <List
            input={input}
            meaning={meaning}
            error={error}
            word={word}
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
            setTeste={setTeste}
            teste={teste}
          ></List>
        </div>
      ) : (
        <h1 className="text-center text-3xl font-semi font-['Montserrat'] text-[#fafafa]">
          {error == false || input == ""
            ? "Search for specific words or paste a text below"
            : "No result was found"}
        </h1>
      )}
      <Text
        word={word}
        setWord={setWord}
        input={input}
        setInput={setInput}
        setExample={setExample}
        setMeaning={setMeaning}
        error={error}
      ></Text>
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
        setTeste={setTeste}
        teste={teste}
      ></SavedWords>
    </div>
  );
}

export default Main;
