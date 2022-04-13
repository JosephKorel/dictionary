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
              <span className="bg-stone-800 text-white rounded-md p-1 font-extrabold">
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
            <li>
              <span>{nouns[i]} </span>
              {nouns[i + 1]}
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
            <li>
              <span>{verbs[i]} </span>
              {verbs[i + 1]}
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
            <li>
              <span>{adjectives[i]} </span>
              {adjectives[i + 1]}
            </li>
          </ul>
        </>
      );
    }

  let random = Math.random();

  let wordObj = {
    id: Math.random(),
    word: input,
    meaning: meaningList,
  };

  let nounObj = {
    id: wordObj.id,
    word: input,
    meaning: filteredNoun,
  };

  let verbObj = {
    id: wordObj.id,
    word: input,
    meaning: filteredVerb,
  };

  let adjObj = {
    id: wordObj.id,
    word: input,
    meaning: filteredAdj,
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

  return (
    <div className="">
      {error === true || input === "" ? (
        <div></div>
      ) : (
        <div className="w-full flex-row justify-center items-center font-['Montserrat']">
          <div>
            <ul className="w-5/12 flex justify-center items-center pb-4">
              <li>
                <h1
                  id="input-word"
                  className="text-6xl font-thin p-1 italic text-white"
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
            <div className="mx-auto w-4/5 flex align-center justify-around child:p-4 ">
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
                  <div className="mx-auto">
                    <h1 className="font-semibold text-2xl mt-8 text-center">
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
                <Phonetics error={error} word={word} input={input}></Phonetics>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
