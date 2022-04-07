import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { searchWord } from "../Tools/functions";
import { Button } from "@mui/material";

function Counter(props) {
  const [text, setText] = useState("");
  const [textObj, setTextObj] = useState([]);
  const word = props.word;
  const input = props.input;
  const setInput = props.setInput;
  const error = props.error;
  const setMeaning = props.setMeaning;
  const setExample = props.setExample;

  const alltext = text.toLowerCase().split(/\s+/);

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

  function hoverWord(event) {
    const value = event.target.innerText;
    const filteredValue = value.replace(/[^a-zA-Z]/gm, "");
    if (value.includes(".")) {
      const valueArray = value.split("");
      const itemIndex = valueArray.indexOf(".");
      const slicedValue = valueArray.slice(1, itemIndex);
      const newValue = slicedValue.join().replace(/,/g, "");
    }

    setInput(filteredValue);
  }

  useEffect(() => {
    if (input) searchWord(undefined, error, word, setMeaning, setExample);
  }, [word]);

  return (
    <div>
      <textarea
        className="border-solid border-2 border-sky-500 rounded-lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <Button variant="contained" onClick={() => checkFrequency()}>
        Search Text
      </Button>
      <Button variant="contained" onClick={() => clearInput()}>
        Clear Text
      </Button>
      <div onClick={(e) => hoverWord(e)}>
        {alltext.map((item) => (
          <span> {item}</span>
        ))}
      </div>
    </div>
  );
}

export default Counter;
