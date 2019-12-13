import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import lummi from "../assets/images/Lummi.jpg";
import design from "../assets/images/Design.jpg";
import decore from "../assets/images/Decore.PNG";
import staging from "../assets/images/Staging.JPG";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import "../styles/indexPage.css";

const useStyles = makeStyles(theme => ({}));

const IndexPageComponent = () => {
  const classes = useStyles();

  return (
    <div>
      <div class="divBgColor">
        <Button>Home</Button>
        <Button>Abput</Button>
        <Button>Shop</Button>
        <Button>Contact</Button>
        <Typography className="textAlignCenter">shavy</Typography>
        <Typography className="textAlignCenter">Girl that Decore</Typography>
      </div>
      <Box display="flex" p={1} bgcolor="#eeffcc">
        <img className="lummieClass" src={lummi}></img>
        <Typography className="welcomeTypoClass">Welcome to shavy</Typography>
      </Box>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1}>
          <img className="designClass" src={design}></img>
          <Typography className="designTypoClass">Design</Typography>
        </Box>
        <Box p={1}>
          <img className="imgClass" src={decore}></img>
          <Typography className="decoreTypoClass">Decore</Typography>
        </Box>
        <Box p={1}>
          <img className="stagingClass" src={staging}></img>
          <Typography className="stagingTypoclass">Staging</Typography>
        </Box>
      </Box>
      <div className="instaDivClass">
        <Typography>Instagram</Typography>
        <Box display="flex" bgcolor="#e6faff">
          <Box p={1}>
            <img className="img1Class" src={design}></img>
          </Box>
          <Box p={1}>
            <img className="imgClass" src={decore}></img>
          </Box>
          <Box p={1}>
            <img className="imgClass" src={staging}></img>
          </Box>
        </Box>
      </div>
    </div>
  );
};
export default IndexPageComponent;
