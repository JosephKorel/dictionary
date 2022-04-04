import React from "react";
import { searchWord } from "../Tools/functions";

function Input(props) {
  const word = props.word;
  const input = props.input;
  const error = props.error;
  const lastinput = props.lastinput;
  const setInput = props.setInput;
  const setLastinput = props.setLastinput;
  const setMeaning = props.setMeaning;
  const setExample = props.setExample;

  function changeInput() {
    const inputValue = document.getElementById("input").value;
    setInput(inputValue);
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
          onClick={(e) => searchWord(e, error, word, setMeaning, setExample)}
          value="Pesquisar"
        ></input>
      </form>
    </div>
  );
}

export default Input;
