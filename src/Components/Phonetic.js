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
        {phoneticText !== undefined ? (
          <div>
            <h1 className="text-center font-semibold text-3xl">Pronounce</h1>
            <h2 className="text-center font-semibold text-xl mt-3">
              {phoneticText}
            </h2>
            <div className="mx-auto mt-10 flex align-center justify-evenly">
              {usPronounce.length != 0 ? (
                <div className="flex-row">
                  <img
                    src="voice.png"
                    alt="pronounce"
                    onClick={() => usAudio.play()}
                    className="hover:scale-105 cursor-pointer"
                  ></img>
                  <h1 className="text-center bg-stone-800 text-white rounded-md mt-2 font-extrabold">
                    US
                  </h1>
                </div>
              ) : null}
              {ukPronounce.length != 0 ? (
                <div className="flex-row">
                  <img
                    src="voice.png"
                    alt="pronounce"
                    onClick={() => ukAudio.play()}
                    className="hover:scale-105 cursor-pointer"
                  ></img>
                  <h1 className="text-center bg-stone-800 text-white rounded-md mt-2 font-extrabold">
                    UK
                  </h1>
                </div>
              ) : null}
            </div>
            <audio id="us" controls="" src={usPronounce[0]}></audio>
            <audio id="uk" controls="" src={ukPronounce[0]}></audio>
          </div>
        ) : (
          <h1 className="text-center font-semibold text-2xl">
            No pronounce found
          </h1>
        )}
      </div>
    );
  } else if (input === "") {
    return <div></div>;
  }
}

export default Phonetics;
