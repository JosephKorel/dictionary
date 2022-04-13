import { Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { searchWord } from "../Tools/functions";
import { FaSearch } from "react-icons/fa";

function Input(props) {
  const input = props.input;
  const setInput = props.setInput;

  let iconStyles = { color: "white", fontSize: "1.5em" };

  return (
    <div>
      <h1 className="text-center text-6xl font-light text-ui-blue  font-[Montserrat] mt-10">
        <span className="font-['Amita'] text-8xl text-ui-blue">E</span>nglish{" "}
        <span className="font-['Amita'] text-8xl text-[#ef5350]">D</span>
        <span className="text-[#ef5350]">ictionary</span>
      </h1>
      <form className="mx-auto w-9/12 py-4 flex justify-evenly item-center text-white">
        <TextField
          sx={{ color: "text.secondary" }}
          inputProps={{
            style: { color: "white" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch style={iconStyles}></FaSearch>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{ style: { color: "white" } }}
          id="standard-basic"
          variant="standard"
          type="text"
          label="Search word"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-1/5 text-[#fafafa]"
          style={{ borderBottom: "1px solid white", color: "#fafafa" }}
        ></TextField>
      </form>
    </div>
  );
}

export default Input;
