import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup(props) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Filter</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="None"
        style={{ color: "black" }}
      >
        <FormControlLabel
          value="None"
          control={<Radio />}
          label="None"
          onClick={() => props.setRender(props.filteredWords)}
        />
        <FormControlLabel
          value="Noun"
          control={<Radio />}
          label="Noun"
          onClick={() => props.setRender(props.onlyNoun)}
        />
        <FormControlLabel
          value="Verb"
          control={<Radio />}
          label="Verb"
          onClick={() => props.setRender(props.onlyVerb)}
        />
        <FormControlLabel
          value="Adjective"
          control={<Radio />}
          label="Adjective"
          onClick={() => props.setRender(props.onlyAdj)}
        />
      </RadioGroup>
    </FormControl>
  );
}
