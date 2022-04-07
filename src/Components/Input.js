import { Button, TextField } from "@mui/material";
import React from "react";
import { searchWord } from "../Tools/functions";

function Input(props) {
  const word = props.word;
  const input = props.input;
  const error = props.error;
  const setInput = props.setInput;
  const setMeaning = props.setMeaning;
  const setExample = props.setExample;

  return (
    <div>
      <form className="mx-auto w-9/12 py-4 flex justify-evenly item-center">
        <TextField
          id="standard-basic"
          variant="standard"
          color="secondary"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          onClick={(e) => searchWord(e, error, word, setMeaning, setExample)}
          type="submit"
          className="ml-4 button"
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default Input;
