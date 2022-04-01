import React from "react";

function List(props) {
  const meaning = props.meaning;
  const error = props.error;
  const example = props.example;
  const input = props.input;

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

  return (
    <div>
      {error === true ? (
        <h1>No results were found</h1>
      ) : (
        <div>
          <div>
            <h1>{input[0].toUpperCase() + input.slice(1)}</h1>
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

/* {meaningList.map((item) => (
  <ul>
    <li key={item.index}>{item}</li>
  </ul>
))} */
