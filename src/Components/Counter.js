import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { searchWord } from "../Tools/functions";

function Counter(props) {
  const [text, setText] = useState("");
  const [textObj, setTextObj] = useState([]);
  const word = props.word;
  const input = props.input;
  const setInput = props.setInput;
  const error = props.error;
  const setMeaning = props.setMeaning;
  const setExample = props.setExample;

  const alltext = text.toLowerCase().split(" ");

  function checkFrequency() {
    const textArray = text.toLowerCase().split(" ");

    const reducedObj = Object.values(
      textArray.reduce((acc, cur) => {
        const element = cur;
        const frequency = acc[element]
          ? acc[element].frequency + 1
          : (acc[element] = 1);
        acc[element] = { element: element, frequency };
        return acc;
      }, {})
    );

    const frequency = reducedObj.sort((o1, o2) => o2.frequency - o1.frequency);

    const exclusions = [
      "the",
      "of",
      "a",
      "an",
      "that",
      "this",
      "be",
      "is",
      "are",
      "on",
      "at",
      "to",
    ];
    const filteredWords = [];
    for (let i = 0; i < frequency.length; i++) {
      if (
        exclusions.some((word) => frequency[i].element.includes(word)) == false
      ) {
        filteredWords.push(frequency[i]);
      }
    }
    setTextObj(filteredWords);
  }

  function clearInput() {
    setText("");
    setTextObj([]);
  }

  function searchItem(e) {
    setInput(e.target.id);
    searchWord(e, error, word, setMeaning, setExample);
  }

  function Result() {
    if (textObj.length > 1) {
      return (
        <div>
          <h1>Most frequent words were</h1>
          {textObj.slice(0, 8).map((item) => (
            <ul>
              <li>
                {item.frequency === 1
                  ? `"${item.element}" for ${item.frequency} time`
                  : `"${item.element}" for ${item.frequency} times`}
                <button onClick={(e) => searchItem(e)} id={item.element}>
                  Search
                </button>
              </li>
            </ul>
          ))}
        </div>
      );
    }
    return <div></div>;
  }

  function hoverWord(event) {
    const value = event.target.innerText;
    setInput(value);
    searchWord(event, error, word, setMeaning, setExample);
    console.log(input);
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "300px", height: "100px" }}
      ></input>
      <button onClick={() => checkFrequency()}>Check frequency</button>
      <button onClick={() => clearInput()}>Clear</button>
      {/*  {text != "" ? <Result></Result> : null} */}
      <div onClick={(e) => hoverWord(e)}>
        {alltext.map((item) => (
          <span> {item}</span>
        ))}
      </div>
    </div>
  );
}

export default Counter;
