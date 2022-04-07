import React from "react";
import { AiTwotoneSound } from "react-icons/ai";

function Phonetics(props) {
  const input = props.input;
  const error = props.error;
  const word = props.word;
  if (error === false || input !== "") {
    const phonetics = word[0].phonetics;

    const phoneticAudio = [].concat(phonetics.map((item) => item.audio));

    const phoneticText = word[0].phonetics[0]?.text;

    const usPronounce = phoneticAudio.filter((item) => item.includes("-us"));

    const ukPronounce = phoneticAudio.filter((item) => item.includes("-uk"));

    const usAudio = document.getElementById("us");
    const ukAudio = document.getElementById("uk");

    return (
      <div>
        {error === false ? (
          <div>
            <h1>Pronounce</h1>
            <h2>{phoneticText}</h2>
            {usPronounce.length != 0 ? (
              <AiTwotoneSound onClick={() => usAudio.play()} />
            ) : null}
            {ukPronounce.length != 0 ? (
              <AiTwotoneSound onClick={() => ukAudio.play()} />
            ) : null}

            <audio id="us" controls="" src={usPronounce[0]}></audio>
            <audio id="uk" controls="" src={ukPronounce[0]}></audio>
          </div>
        ) : (
          <h1>No pronounce found</h1>
        )}
      </div>
    );
  } else if (input === "") {
    return <div></div>;
  }
}

export default Phonetics;
