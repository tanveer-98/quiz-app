import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MUIRadio from "../components/MUIRadio";

const MyContainer = styled('div')({
  display: "flex",
  flex: 1,
  flexGrow: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
});
const Login = () => {
  const [inputs, setInputs] = useState({
    email: ""
  });

  const [errors , setErrors] = useState({
    email : false
  })

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // if (e.keyCode === 13) {
    //   window.sessionStorage.setItem("email", e.target.value);
    // }
    if(inputs.email === null || inputs.email ==="") {
      setErrors({
        ...errors, email : true
      })
      return;
    }
    alert(JSON.stringify(inputs));
    window.sessionStorage.setItem("email", inputs.email);
    navigate("/questions");
    //  console.log(inputs)
  };

  const handleChange = (e: any) => {
    setErrors({...errors, email : false})
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <MyContainer>
      <form
        action="#"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection : "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          name="email"
          sx={{ margin: "2px" }}
          type={"email"}
          // placeholder="Enter Email"
          label="Enter Email"
          onChange={(e) => handleChange(e)}
          // onKeyDown={(e) => handleSubmit(e)}
          autoFocus
          error={errors.email}
          helperText = {errors.email ? "This Field cannot be empty." : ""}
       />
        {/* <MUIRadio/> */}

        <Button type="submit"> SUBMIT </Button>
      </form>
    </MyContainer>
  );
};

export default Login;
