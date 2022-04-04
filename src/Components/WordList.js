import React from "react";

function List(props) {
  const meaning = props.meaning;
  const error = props.error;
  const example = props.example;
  const input = props.input;
  const lastinput = props.lastinput;
  const saveword = props.saveword;
  const setSaveword = props.setSaveword;
  const setLastinput = props.setLastinput;

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

  function saveWord() {
    setSaveword([...saveword, meaningList.slice(0, 2)]);
    setLastinput([...lastinput, input[0].toUpperCase() + input.slice(1)]);
  }

  return (
    <div>
      {error === true || input === "" ? (
        <h1>No results were found</h1>
      ) : (
        <div>
          <div>
            <ul>
              <li>
                <h1>{input[0].toUpperCase() + input.slice(1)}</h1>
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
      )}
    </div>
  );
}

export default List;
