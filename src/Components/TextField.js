import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { searchWord } from "../Tools/functions";
import { Button, Popper } from "@mui/material";

function Text(props) {
  const [text, setText] = useState("");
  const [textObj, setTextObj] = useState([]);
  const word = props.word;
  const input = props.input;
  const setInput = props.setInput;
  const error = props.error;
  const setMeaning = props.setMeaning;
  const setExample = props.setExample;

  const alltext = text.toLowerCase().split(/\s+/);

  /*  function checkFrequency() {
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
  } */

  function clearInput() {
    setText("");
    setTextObj([]);
    setInput("");
  }

  function hoverWord(event) {
    const value = event.target.innerText;
    const filteredValue = value.replace(/[^a-zA-Z]/gm, "");

    setInput(filteredValue);
  }

  useEffect(() => {
    if (input) searchWord(undefined, error, word, setMeaning, setExample);
  }, [word]);

  const pasteText = () => {
    navigator.clipboard
      .readText()
      .then((userText) => {
        setText(userText);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  return (
    <div className="font-[Montserrat] mt-8">
      <div className="flex justify-center">
        <textarea
          className="w-full border-0 rounded-lg text-2xl m-0 overflow-hidden"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex flex-col align-center justify-center">
          <Button
            variant="contained"
            onClick={() => clearInput()}
            style={{ marginLeft: "8px", height: "30px" }}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            onClick={pasteText}
            style={{ marginLeft: "8px", height: "30px", marginTop: "5px" }}
          >
            Paste
          </Button>
        </div>
      </div>
      {text.length !== 0 ? (
        <div
          onClick={(e) => hoverWord(e)}
          className="w-full mx-auto rounded-md text-3xl mt-5 bg-[#f0f4c3] p-2 max-h-[500px] overflow-auto"
        >
          {alltext.map((item) => (
            <span className="hover:bg-[#64b5f6] rounded-mg cursor-pointer">
              {" "}
              {item}
            </span>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Text;
