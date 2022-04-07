import { ExpandMoreOutlined, Favorite } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RowRadioButtonsGroup from "../Style-Components/RowRadio";

function SavedWords(props) {
  const saveword = props.saveword;
  const onlyNoun = props.onlyNoun;
  const onlyVerb = props.onlyVerb;
  const onlyAdj = props.onlyAdj;
  const setOnlyNoun = props.setOnlyNoun;
  const setOnlyVerb = props.setOnlyVerb;
  const setOnlyAdj = props.setOnlyAdj;
  const setSaveword = props.setSaveword;
  const [render, setRender] = useState([saveword]);

  let newNounList = [];
  useEffect(() => {
    setRender(saveword);
  }, [saveword]);

  function removeItem(e) {
    const targetID = e.target.id;
    const newList = saveword.filter((item) => item.id != targetID);
    const target = saveword.filter((item) => item.id == targetID);
    const targetWord = target[0].word;
    /* newList.length == 0 ? setSaveword([]) : setSaveword(newList); */

    /* if (render === onlyNoun) {
      const newList = onlyNoun.filter((item) => item.word !== targetWord);
      setOnlyNoun(newList);
      setRender(onlyNoun);
    } */

    newNounList = onlyNoun.filter((item) => item.word !== targetWord);

    /* newNounList.length == 0 ? setOnlyNoun([]) : setOnlyNoun(newNounList); */

    /*  const newVerbList = onlyVerb.filter((item) => item.word !== targetWord[0]);
    newVerbList.length == 0 ? setOnlyVerb([]) : setOnlyVerb(newVerbList);

    const newAdjList = onlyAdj.filter((item) => item.word !== targetWord[0]);
    newAdjList.length == 0 ? setOnlyAdj([]) : setOnlyAdj(newAdjList); */

    console.log(onlyNoun);
    console.log(newNounList);
  }

  return (
    <div>
      <div className="w-9/12 mx-auto">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
            <Typography>
              <h1>Saved words</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RowRadioButtonsGroup
              render={render}
              setRender={setRender}
              saveword={saveword}
              onlyNoun={onlyNoun}
              onlyVerb={onlyVerb}
              onlyAdj={onlyAdj}
            ></RowRadioButtonsGroup>
            {saveword.length !== 0 ? (
              render.length !== 0 ? (
                render.map((item) => (
                  <div>
                    <h1>{item.word}</h1>
                    {item.meaning}
                    <Button
                      id={item.id}
                      onClick={(e) => removeItem(e)}
                      variant="contained"
                    >
                      Remove
                    </Button>
                  </div>
                ))
              ) : (
                <div>
                  <h1>No matched results</h1>
                </div>
              )
            ) : (
              <h1>You haven't added any words yet</h1>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
      {saveword.length != 0 ? (
        saveword.map((item) => (
          <div>
            <h1>{item.word}</h1>
            {item.meaning}
          </div>
        ))
      ) : (
        <h1>Não</h1>
      )}
    </div>
  );
}

export default SavedWords;
