import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "./Input";

function Main() {
  const [input, setInput] = useState("House");
  const [word, setWord] = useState([]);
  const [resultlist, setResultlist] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );

      setWord(data.data);
    } catch (error) {
      console.log("Palavra inválida");
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [input]);

  function searchWord() {
    const definition = word[0].meanings[0].definitions;
    const defMap = definition.map((item) => item.definition);
    const wordObj = {
      id: Math.random(),
      name: input,
      firstMeaning: defMap[0],
      secondMeaning: defMap[1],
      thirdMeaning: defMap[2],
    };

    setResultlist([...resultlist, wordObj]);
  }

  function List() {
    return resultlist.map((item) => (
      <div key={item.id}>
        <ul>
          <li>
            <h1>{item.name}</h1>
          </li>
          <li>{item.firstMeaning}</li>
          <li>{item.secondMeaning}</li>
          <li>{item.thirdMeaning}</li>
        </ul>
      </div>
    ));
  }

  return (
    <div>
      <Input
        input={input}
        setInput={setInput}
        word={word}
        resultlist={resultlist}
        setResultlist={setResultlist}
        searchWord={searchWord}
      ></Input>
      <List></List>
    </div>
  );
}

export default Main;
