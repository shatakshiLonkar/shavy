import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import lummi from "../assets/images/Lummi.jpg";
import design from "../assets/images/Design.jpg";
import decore from "../assets/images/Decore.PNG";
import staging from "../assets/images/Staging.JPG";
import { Typography } from "@material-ui/core";
import "../styles/indexPage.css";
const useStyles = makeStyles(theme => ({}));

const IndexPageComponent = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Paper className="paperClass">
          <div>
            <Grid>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Shop</Button>
              <Button color="inherit">Contact</Button>
              <br></br>
              <div>
                <Typography className="typoClass">Shavy</Typography>
                <Typography className="typoClass">Give that decore</Typography>
              </div>
              {/* </Grid> */}
            </Grid>
          </div>
        </Paper>

        <Grid container md={6}>
          <Grid item md={4}>
            <img className="lummieClass" src={lummi}></img>
          </Grid>
          <Grid item md={2}>
            <div>
              <Typography variant="h4" style={{ marginLeft: "500px" }}>
                Welcome to Shavy
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid className="imageGridClass" container md={12}>
          <Grid item md={4}>
            <img className="imgClass" src={design}></img>
            <Typography>Design</Typography>
          </Grid>
          <Grid item md={4}>
            <img className="imgClass" src={decore}></img>
            <Typography>Decore</Typography>
          </Grid>
          <Grid item md={4}>
            <img className="imgClass" src={staging}></img>
            <Typography>Staging</Typography>
          </Grid>
        </Grid>
        <div className="divClass">
          <img className="decoreClass" src={decore}></img>
        </div>
      </div>
    </>
  );
};
export default IndexPageComponent;
