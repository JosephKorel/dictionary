import React from "react";

function Input(props) {
  const words = props.word;

  function changeInput() {
    const inputValue = document.getElementById("input").value;
    props.setInput(inputValue);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={props.input}
          onChange={() => changeInput()}
          id="input"
        ></input>
      </form>
      <button onClick={() => props.searchWord()}>Pesquisar</button>
      <h1>{props.input}</h1>
    </div>
  );
}

export default Input;
