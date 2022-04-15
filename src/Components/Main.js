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
  const [onlyNoun, setOnlyNoun] = useState([]);
  const [onlyVerb, setOnlyVerb] = useState([]);
  const [onlyAdj, setOnlyAdj] = useState([]);

  useEffect(() => {
    document.body.classList.add("bg-[#212121]");
  }, []);

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
      <div className="mx-auto 2xl:w-10/12 flex justify-evenly align-center xl:w-full lg:w-full md:w-full">
        <div className="ml-5 flex-initial w-8/12 lg:ml-2 lg:w-7/12 md:ml-0 ">
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
            saveword={saveword}
            meaning={meaning}
            onlyNoun={onlyNoun}
            onlyVerb={onlyVerb}
            onlyAdj={onlyAdj}
            setOnlyNoun={setOnlyNoun}
            setOnlyVerb={setOnlyVerb}
            setOnlyAdj={setOnlyAdj}
            setSaveword={setSaveword}
          ></SavedWords>
        </div>
        <div className="flex-1">
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
            setOnlyNoun={setOnlyNoun}
            setOnlyVerb={setOnlyVerb}
            setOnlyAdj={setOnlyAdj}
          ></List>
        </div>
      </div>
    </div>
  );
}

export default Main;
