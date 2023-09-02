import { styled } from "@mui/system";
import { useEffect } from "react";
const Container = styled("div")({
  width: "100vw",
  background: "red",
  height: "100vh",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
});

const Questions = () => {
  useEffect(()=>{
      
  },[])
  
  return <Container>{window.sessionStorage.getItem("email")}</Container>;
};

export default Questions;
