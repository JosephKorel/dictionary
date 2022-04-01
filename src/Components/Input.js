import React from "react";

function Input(props) {
  const word = props.word;
  const input = props.input;
  const meaning = props.meaning;
  const error = props.error;
  const setInput = props.setInput;
  const setMeaning = props.setMeaning;
  const setExample = props.setExample;

  function changeInput() {
    const inputValue = document.getElementById("input").value;
    setInput(inputValue);
  }

  function searchWord(e) {
    e.preventDefault();
    if (error == false) {
      const definitions = word[0].meanings
        .slice(0, 2)
        .map((item) => item.definitions);
      const definitionMap = definitions.map((item) =>
        item.map((item) => item.definition)
      );

      const type = word[0].meanings
        .slice(0, 3)
        .map((item) => item.partOfSpeech);

      const mainMeaning = [];
      const secondMeaning = [];

      if (definitionMap[1]) {
        for (let i = 0; i < definitionMap[0].length; i++) {
          mainMeaning.push(type[0], definitionMap[0][i]);
        }

        for (let i = 0; i < definitionMap[1].length; i++) {
          secondMeaning.push(type[1], definitionMap[1][i]);
        }

        const Meanings = [].concat(mainMeaning, secondMeaning);
        for (let i = 0; i < Meanings.length; i += 2) {
          Meanings[i] = Meanings[i].toUpperCase();
        }

        setMeaning(Meanings);
      } else {
        for (let i = 0; i < definitionMap[0].length; i++) {
          mainMeaning.push(type[0], definitionMap[0][i]);
        }
        const Meanings = [].concat(mainMeaning);
        for (let i = 0; i < Meanings.length; i += 2) {
          Meanings[i] = Meanings[i].toUpperCase();
        }
        setMeaning(Meanings);
      }

      const examples = word[0].meanings.map((item) => item.definitions);
      const exampleMap = examples.map((item) =>
        item.map((item) => item.example)
      );
      const exampleArray = [];
      exampleMap.map((item) => {
        Array.prototype.push.apply(exampleArray, item);
      });
      const exampleList = exampleArray.filter((item) => item != undefined);
      setExample(exampleList);
    } else if (error == true) {
      setMeaning([]);
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={() => changeInput()}
          id="input"
        ></input>
        <input
          type="submit"
          onClick={(e) => searchWord(e)}
          value="Pesquisar"
        ></input>
      </form>
    </div>
  );
}

export default Input;
