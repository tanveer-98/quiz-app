import { makeStyles } from "@mui/styles";

import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  collapseClasses,
} from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    color: "black",
    display: "grid",
  },
  radioLabelStyle: {
    color: "black",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    width: "100%",
  },
  radioGroupStyle: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: "10px",
    marginTop: "40px",
  },
  outerContainer :{
    display : ""

  }
}));

const MUIRadio = (props: any) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
    setValue(event.target.value);
  };
  // console.log("mui radio component")
  // console.log(props.answers)
  const classes = useStyles();
  return (

    <div className={classes.outerContainer}>

    <Box className={classes.boxStyle}>
      <FormControl>
        {/* <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel> */}
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          className={classes.radioGroupStyle}
        >
          {props.answers.map((answer: any, index: number) => (
            <FormControlLabel
              value={answer}
              control={<Radio />}
              label={answer}
              key={index}
              className={classes.radioLabelStyle}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>

    </div>
  );
};

export default MUIRadio;
