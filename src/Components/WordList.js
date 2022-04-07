import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function List(props) {
  const meaning = props.meaning;
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

  const meaningList = [];
  for (let i = 0; i < meaning.slice(0, 8).length - 1; i += 2) {
    meaningList.push(
      <>
        <ul>
          <li>
            <span>{meaning[i]} </span>
            {meaning[i + 1]}
          </li>
        </ul>
      </>
    );
  }

  const examples = example.slice(0, 3).map((item) => (
    <ul>
      <li>{item}</li>
    </ul>
  ));

  let nouns = [];
  let verbs = [];
  let adjectives = [];

  for (let i = 0; i < meaning.slice(0, 6).length - 1; i++) {
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

  for (let i = 0; i < meaning.slice(0, 6).length - 1; i++) {
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

  for (let i = 0; i < meaning.slice(0, 6).length - 1; i++) {
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

  return (
    <div className="mx-auto">
      {error === true || input === "" ? (
        <h1>No results were found</h1>
      ) : (
        <div className="flex justify-center items-center">
          <div>
            <div>
              <ul>
                <li>
                  <h1 id="input-word">
                    {input[0].toUpperCase() + input.slice(1)}
                  </h1>
                </li>
                <li>
                  <button onClick={() => saveWord()}>Save word</button>
                </li>
              </ul>
              {meaningList}
            </div>
            <div>
              {example.length != 0 ? (
                <div>
                  <h1>Examples:</h1>
                  {examples}
                </div>
              ) : (
                <h1>No examples were found</h1>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
