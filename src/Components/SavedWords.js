import React from "react";

function SavedWords(props) {
  const lastinput = props.lastinput;
  const saveword = props.saveword;
  let listss = [];

  if (saveword.length != 0) {
    listss = saveword.map((item) => (
      <div>
        <h2>Meaning:</h2>
        {item}
      </div>
    ));
  }

  const wordMeaning = [];
  for (let i = 0; i < lastinput.length; i++) {
    wordMeaning.push(
      <div>
        <h1>{lastinput[i]}</h1>
        {listss[i]}
      </div>
    );
  }

  return listss.length == 0 ? <div></div> : <div>{wordMeaning}</div>;
}

export default SavedWords;
