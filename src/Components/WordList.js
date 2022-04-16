import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Phonetics from "./Phonetic";

function List(props) {
  const meaning = props.meaning;
  const word = props.word;
  const error = props.error;
  const example = props.example;
  const input = props.input;
  const saveword = props.saveword;
  const onlyNoun = props.onlyNoun;
  const onlyVerb = props.onlyVerb;
  const onlyAdj = props.onlyAdj;
  const setOnlyNoun = props.setOnlyNoun;
  const setOnlyVerb = props.setOnlyVerb;
  const setOnlyAdj = props.setOnlyAdj;
  const setSaveword = props.setSaveword;
  const [saveimg, setSaveimg] = useState("save.png");

  const meaningList = [];
  for (let i = 0; i < meaning.slice(0, 8).length - 1; i += 2) {
    meaningList.push(
      <>
        <ul>
          <li className="pb-2">
            <p>
              <span
                id="span"
                className="bg-stone-800 text-white rounded-md p-1 font-extrabold"
              >
                {meaning[i]}
              </span>
              <span className="ml-2 italic">{meaning[i + 1]}</span>
            </p>
          </li>
        </ul>
      </>
    );
  }

  const examples = example.slice(0, 3).map((item) => (
    <ul className="mt-5 italic">
      <li className="pb-2">{item}</li>
    </ul>
  ));

  let nouns = [];
  let verbs = [];
  let adjectives = [];

  for (let i = 0; i < meaning.slice(0, 8).length - 1; i++) {
    meaning[i] == "NOUN"
      ? nouns.push(meaning[i], meaning[i + 1])
      : console.log();
  }
  const filteredNoun = [];
  if (nouns.length != 0)
    for (let i = 0; i < nouns.length - 1; i += 2) {
      filteredNoun.push(
        <>
          <ul>
            <li className="pb-2">
              <p>
                <span className="rounded-md p-1 font-extrabold bg-[#fff8f7] text-stone-800">
                  {nouns[i]}
                </span>
                <span className="ml-2 italic">{nouns[i + 1]}</span>
              </p>
            </li>
          </ul>
        </>
      );
    }

  for (let i = 0; i < meaning.slice(0, 8).length - 1; i++) {
    meaning[i] == "VERB"
      ? verbs.push(meaning[i], meaning[i + 1])
      : console.log();
  }

  const filteredVerb = [];
  if (verbs.length != 0)
    for (let i = 0; i < verbs.length - 1; i += 2) {
      filteredVerb.push(
        <>
          <ul>
            <li className="pb-2">
              <p>
                <span className="rounded-md p-1 font-extrabold bg-[#fff8f7] text-stone-800">
                  {verbs[i]}
                </span>
                <span className="ml-2 italic">{verbs[i + 1]}</span>
              </p>
            </li>
          </ul>
        </>
      );
    }

  for (let i = 0; i < meaning.slice(0, 8).length - 1; i++) {
    meaning[i] == "ADJECTIVE"
      ? adjectives.push(meaning[i], meaning[i + 1])
      : console.log();
  }

  const filteredAdj = [];
  if (adjectives.length != 0)
    for (let i = 0; i < adjectives.length - 1; i += 2) {
      filteredAdj.push(
        <>
          <ul>
            <li className="pb-2">
              <p>
                <span className="rounded-md p-1 font-extrabold bg-[#fff8f7] text-stone-800">
                  {adjectives[i]}
                </span>
                <span className="ml-2 italic">{adjectives[i + 1]}</span>
              </p>
            </li>
          </ul>
        </>
      );
    }

  let wordObj = {
    id: Math.random(),
    word: input,
    meaning: meaningList,
  };

  let nounObj = {
    id: wordObj.id,
    word: input,
    meaning: filteredNoun,
    type: "noun",
  };

  let verbObj = {
    id: wordObj.id,
    word: input,
    meaning: filteredVerb,
    type: "verb",
  };

  let adjObj = {
    id: wordObj.id,
    word: input,
    meaning: filteredAdj,
    type: "adj",
  };

  function saveWord() {
    setSaveword([...saveword, wordObj]);

    nounObj.meaning.length !== 0
      ? setOnlyNoun([...onlyNoun, nounObj])
      : console.log();

    verbObj.meaning.length !== 0
      ? setOnlyVerb([...onlyVerb, verbObj])
      : console.log();

    adjObj.meaning.length !== 0
      ? setOnlyAdj([...onlyAdj, adjObj])
      : console.log();
  }

  const styles = "ml-3 hover:scale-105 rounded-full p-0 cursor-pointer ";
  const font = input.length >= 9 ? "text-4xl" : "text-5xl";

  return (
    <div className="">
      {error === true || input === "" ? (
        <div>
          <h1 className="mx-auto mt-5 text-center w-9/12 text-3xl font-semi font-['Montserrat'] text-[#fafafa]">
            {error == false || input == ""
              ? "Search for specific words or paste some text"
              : "No result was found"}
          </h1>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center font-['Montserrat']">
          <div className="flex flex-col justify-center items-center">
            <ul className="mx-auto w-11/12 flex justify-between items-center pb-4">
              <li>
                <h1
                  id="input-word"
                  className={`${font} font-thin p-1 italic text-white`}
                >
                  {input.toUpperCase()}
                </h1>
              </li>
              <li>
                <img
                  src={saveimg}
                  alt="save-word"
                  onClick={() => saveWord()}
                  onMouseEnter={() => setSaveimg("save-white.png")}
                  onMouseOut={() => setSaveimg("save.png")}
                  className={styles}
                ></img>
              </li>
            </ul>
            <div className="mx-auto w-full flex flex-col align-center justify-center child:p-4 child:mt-5 ">
              <section className="w-96 bg-ui-blue text-white border-solid border-4 rounded-lg border-ui-blue">
                <h1 className="text-center font-semibold text-3xl">Meaning</h1>
                {meaningList}
              </section>
              <section className="w-96 bg-ui-blue text-white border-solid border-4 rounded-lg border-ui-blue">
                {example.length != 0 ? (
                  <div>
                    <h1 className="text-center font-semibold text-3xl">
                      Examples
                    </h1>
                    {examples}
                  </div>
                ) : (
                  <div className="mx-auto flex flex-col align-center justify-center">
                    <h1 className="font-semibold text-2xl text-center">
                      No examples were found
                    </h1>
                    <img
                      src="empty.png"
                      alt="empty"
                      className="mx-auto mt-2"
                    ></img>
                  </div>
                )}
              </section>
              <section className="w-96 bg-ui-blue text-white border-solid border-4 rounded-lg border-ui-blue">
                {meaning.length !== 0 ? (
                  <Phonetics
                    error={error}
                    word={word}
                    input={input}
                  ></Phonetics>
                ) : (
                  <div></div>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
