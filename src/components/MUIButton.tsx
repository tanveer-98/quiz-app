import React from "react";
import { Button } from "@mui/material";
const MUIButton = ({ children, color, hovercolor, variant , onClick}: any) => {
  return (
    <Button
      sx={{
        backgroundColor: color,
        height: "50px",
        display: "inline-block",
        transition: "all 0.8 ease-in-out",
        "&:hover": {
          backgroundColor: hovercolor,
          opacity : "90%",
          scale: "1.1"
        },
      }}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MUIButton;
