import React from "react";

function Phonetics(props) {
  const input = props.input;
  const error = props.error;
  const word = props.word;
  if (error === false || input !== "") {
    const phonetics = word[0].phonetics;

    const phoneticAudio = [].concat(phonetics.map((item) => item.audio));

    const phoneticText = word[0].phonetics[0].text;

    const pronounce = phoneticAudio.filter((item) => item != "");

    return (
      <div>
        {pronounce[0] == true || error === false ? (
          <div>
            <h1>Pronounce</h1>
            <h2>{phoneticText}</h2>
            <audio controls src={pronounce[0]}></audio>
          </div>
        ) : (
          <h1>No pronounce found</h1>
        )}
      </div>
    );
  }
  return <div></div>;
}

export default Phonetics;
