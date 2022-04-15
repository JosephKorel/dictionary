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

  let filteredWords = saveword.filter(filterItems);

  function filterItems(name, index, array) {
    return array.findIndex((item) => item.word === name.word) == index;
  }

  useEffect(() => {
    const filteredNoun = onlyNoun.filter(filterItems);
    const filteredVerb = onlyVerb.filter(filterItems);
    const filteredAdj = onlyAdj.filter(filterItems);
    setOnlyNoun(filteredNoun);
    setOnlyVerb(filteredVerb);
    setOnlyAdj(filteredAdj);
    setRender(filteredWords);
    if (render[0]) {
      render[0].type === "noun" ? setRender(onlyNoun) : console.log("Aa");
    }
  }, [saveword]);

  function removeItem(e) {
    const targetID = e.target.id;
    const target = saveword.filter((item) => item.id == targetID);
    const targetWord = target[0].word;
    setSaveword(saveword.filter((item) => item.id != targetID));

    setOnlyNoun(onlyNoun.filter((item) => item.word !== targetWord));

    setOnlyVerb(onlyVerb.filter((item) => item.word !== targetWord));

    setOnlyAdj(onlyAdj.filter((item) => item.word !== targetWord));

    if (render === onlyNoun) {
      setRender(onlyNoun);
    }
  }

  return (
    <div>
      <div className="w-full mx-auto mt-5">
        <Accordion
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreOutlined style={{ color: "white" }} />}
          >
            <Typography
              style={{
                fontWeight: "500",
                fontSize: "1.5rem",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <h1>Saved words</h1>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              border: "2px solid #1976d2",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <RowRadioButtonsGroup
              render={render}
              setRender={setRender}
              filteredWords={filteredWords}
              onlyNoun={onlyNoun}
              onlyVerb={onlyVerb}
              onlyAdj={onlyAdj}
            ></RowRadioButtonsGroup>
            {saveword.length !== 0 ? (
              render.length !== 0 ? (
                render.map((item) => (
                  <div
                    id="save-div"
                    className="bg-stone-800 p-3 rounded-lg font-[Montserrat] mt-5"
                  >
                    <h1 className="text-ui-blue text-3xl font-semibold py-3">
                      {item.word.toUpperCase()}
                    </h1>
                    {item.meaning}
                    <Button
                      id={item.id}
                      onClick={(e) => removeItem(e)}
                      variant="contained"
                      style={{ marginTop: "12px" }}
                    >
                      Remove
                    </Button>
                  </div>
                ))
              ) : (
                <div>
                  <h1 className="text-stone-800">No matched results</h1>
                </div>
              )
            ) : (
              <h1 className="text-stone-800">
                You haven't added any words yet
              </h1>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default SavedWords;
