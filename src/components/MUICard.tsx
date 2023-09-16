import {Card, CardActions, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';
import { ThemeProvider , useMediaQuery , createTheme } from '@mui/material';
const MyTypography = styled('div')({
  border: 0,
  borderRadius: 3,
  background: "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))",
  // boxShadow: '2px 3px 5px 2px black',
  color: 'black',
  height : "auto",
  width : "500px",
  // marginX : "100px",
  padding: '20px 30px',
  cursor : "pointer"
});
const cardStyle = {
  // border : "2px solid black",
  width: "100%x" , marginTop : "10px" , marginBottom:"10px", cursor:"pointer",
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)', // You can adjust the scale factor for the desired effect
    boxShadow: '0px 0px 10px rgba(0,0,0,0.3)', // Add a shadow on hover if you like
  },
};

const MUICard = ({ number, question , onClick}:any) => {


  // console.log(number);
  // console.log(question);
  return (

    <Card sx={cardStyle}  onClick={onClick}>
      {/* <CardContent> */}
        <Typography    
        // style = " color:black; "
        style = {{
          background: "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))", 
        padding : "10px 40px " , width : "100%" ,}}
        sx = {{ fontSize: 14  , width : "500px"}} 
        color="text.secondary"  
        >
         Question {number+1}   
        </Typography>
         {/* <MyTypography >
          
         {question.question}
        </MyTypography> */}
      {/* </CardContent> */}
    </Card>  
  )
}

export default MUICard