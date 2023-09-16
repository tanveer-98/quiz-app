import { styled } from "@mui/system";
import { ThreeDots } from "react-loader-spinner";
import {
  Button,
  Hidden,
  TextField,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";

import { useEffect, useState } from "react";
import { api } from "../constants/index";
import axios from "axios";
import MUICard from "../components/MUICard";
import QuestionCard from "../components/QuestionCard";
import MUIButton from "../components/MUIButton";

const Container = styled("div")({
  display: "flex",
  width: "100vw",
  height: "100%",
  // backgroundColor : "red"
});

const LeftContainer = styled("div")({
  overflow: "hidden",
  height: "100% ",
});

const LeftBar = styled("div")({
  overflowY: "scroll",
  overflowX: "hidden",
  height: "100%",
  alignSelf: "flex-start",
  display: "flex",
  flexDirection: "column",
  padding: "20px  100px",
});

const RightBar = styled("div")({
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  // backgroundColor: "pink",
});

const Question = styled("div")({
  padding: "10px",
  margin: "10px",
  overflow: "hidden",
  height: "100%",
  background: "",
  borderRadius: "10px",
  marginBottom: "10px",
});

const Loader = styled("div")({
  display: "flex",
  height: "100vh",
  width: "100vw",
  justifyContent: "center",
  alignItems: "center",
});

const BottomNavigator = styled("div")({
  height: "100px",
  // backgroundColor: "red",
  width: "100%",
  alignSelf: "flex-start",
  display : "flex",
  justifyContent: "space-around",
  marginTop : "auto"
});

interface IQuestion {
  index: number;
  question: any;
}

const Questions = () => {
  const isMobile = useMediaQuery("(max-width : 600px)");
  const theme = createTheme();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [currentQuestion, setQuestion] = useState<IQuestion>({
    index: 0,
    question: {},
  });

  useEffect(() => {
    console.log(
      "QUESTIONS FETCHED"
    )
    const getData = async () => {
      const data = await axios.get(api);
      setLoading(false);
      setData(data.data.results);
      setQuestion({
        index: 0,
        question: data.data.results[0],
      });
    };
    getData();
  }, []);
  const handleNext  = ()=>{
    const found = data[currentQuestion.index+1];
    setQuestion({
      index : currentQuestion.index+1, 
      question:  found
    })

  }
  const handlePrev = ()=>{
    const found = data[currentQuestion.index-1];
    setQuestion({
      index : currentQuestion.index-1, 
      question:  found
    })
  }
  const handleClick = (index: number, question: any) => {
    console.log("handle Click");
    console.log(index);
    console.log(question);
    setQuestion({
      index,
      question,
    });
  };
  return (
    <>
      {loading ? (
        <Loader
          style={{
            color: "black",
            display: "flex",
            height: "100",
            width: "100vw",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </Loader>
      ) : (
        <Container>
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Container> */}
            {loading ? (
              // <div style ={{width: "100%" , height: }}>
              <h1> Loading ... </h1>
            ) : (
              // </div>
              // <Hidden xsDown>
              <ThemeProvider theme={theme}>
                {isMobile ? (
                  ""
                ) : (
                  <LeftContainer>
                    <div
                      style={{
                        width: "100%",
                        background: "yellowgreen",
                        borderRadius: "0 0 5px 5px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      Questions
                    </div>
                    <LeftBar>
                      {data &&
                        data.map((element: any, index: number) => {
                          return (
                            <MUICard
                              onClick={() => handleClick(index, element)}
                              number={index}
                              question={element}
                            />
                          );
                        })}
                    </LeftBar>
                  </LeftContainer>
                )}
              </ThemeProvider>
            )}
          </div>
          <RightBar>
            <QuestionCard
              question={currentQuestion.question}
              index={currentQuestion.index}
            />
            <BottomNavigator>
              <MUIButton color="#9ACD32" variant={`${currentQuestion.index === 0? 'disabled' : "contained"}`}  hovercolor ="#9ACD32"
              onClick={handlePrev}> PREVIOUS</MUIButton>
            
              {currentQuestion.index === 14 ? (
                <MUIButton color="#9ACD32" variant="contained"  hovercolor ="#9ACD32"> SUBMIT</MUIButton>
                ) : (
                  <MUIButton color="#9ACD32" variant="contained" hovercolor="#9ACD32" onClick={handleNext}> NEXT </MUIButton>
              )}
            </BottomNavigator>
          </RightBar>
        </Container>
      )}
    </>
  );
};

export default Questions;
