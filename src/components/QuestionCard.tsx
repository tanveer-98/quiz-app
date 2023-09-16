import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { replaceHtmlEntities } from "../utilities";
import { Grid, Paper, collapseClasses } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import MUIRadio from "./MUIRadio";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    color: "green",
    // backgroundColor : "red",
    padding: "0px"
  },
  gridStyle :{
    display : "flex",
    justifyContent : "center",
    alignItems : "center"
  }
}));

const Container = styled("div")({
  // border: "1px solid black",
  padding: "20px 10px",
  display: "flex",
  flexDirection: "column",
});

const AnswersContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gap: "5px",
});

const QuestionCard = (props: any) => {
  const classes = useStyles();
  // const [answers, setAnswers] = useState(null);
  const correctanswer = props.question.correct_answer;
  const incorrectanswers = props.question.incorrect_answers;
  const answers = [ correctanswer , ... incorrectanswers];

  useEffect(() => {}, []);

  console.log("inside props");
  console.log(props);
  return (
    <Container style={{ fontSize: "24px", color: "black" }}>
      {props.question.question && replaceHtmlEntities(props.question.question)}
      <Grid container spacing={2} className={classes.gridStyle}>
        <MUIRadio answers={answers}/>
        {/* 
        {
          answers.map((answer)=>{
            return <Grid className={classes.paperStyle} item xs={12} sm={6} md={6}>
            <Paper>{answer}</Paper>
          </Grid>
          })
        } 
        */}
      </Grid>
    </Container>
  );
};

export default QuestionCard;
