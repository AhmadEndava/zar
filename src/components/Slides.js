import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Filter from "./Filter";
import FlightCards from "./FlightCards";
import Contacts from "./Contacts";
import logo from "../assets/images/logo.png";

const useStyles = makeStyles({
  mainDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  card: {
    marginTop: 20,
    alignSelf: "center",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",

  },
  slideDiv: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    alignSelf: "center",
    fontFamily: "montserrat, sans-serif",
    padding: 10,
    textAlign: 'center'
  },
  img: {
    alignSelf: "center",
    width: "50px",
    height: "50px",
    marginBottom: "2%",
  },
  buttonsDiv: {
    alignSelf: "center",
    marginBottom: "1%",
  },
});

function Slides({ slides }) {
  const [counter, setCounter] = useState(0);
  const classes = useStyles();

  const submitted = useSelector((state) => state.form.submitted);

  function restartButton() {
    setCounter(0);
  }
  function prevButton() {
    if (counter === 4 || counter === 3 || counter === 2 || counter === 1) {
      setCounter(counter - 1);
    }
  }
  function nextButton() {
    if (counter == 3 || counter == 2 || counter == 1 || counter == 0) {
      setCounter(counter + 1);
    }
  }

  function nextButtonDisabled() {
    if (counter == 4) {
      return true;
    }
    if (counter == 1 && submitted == false) {
      return true;
    }
  }
  return (
    <div className={classes.mainDiv}>
      <Paper elevation={3} className={classes.card}>
        {slides &&
          slides.map(
            (item, index) =>
              counter == index && (
                <div key={index} className={classes.slideDiv}>
                  <h3 className={classes.text}>{item.title}</h3>

                  <p className={classes.text}>{item.text}</p>
                  {counter === 4 ? (
                    <img className={classes.img} src={logo} />
                  ) : null}

                  {counter === 1 ? <Filter /> : null}

                  {counter === 2 ? <FlightCards /> : null}

                  {counter === 3 ? <Contacts /> : null}
                </div>
              )
          )}
      </Paper>
      <br />
      <div className={classes.buttonsDiv}>
        <Button
          style={{ textTransform: "none" }}
          variant="outlined"
          disabled={counter == 0 ? true : false}
          onClick={() => restartButton()}
        >
          <Typography>Comenzar de nuevo</Typography>
        </Button>
        <Button
          startIcon={<ArrowBackIosNewIcon />}
          style={{ textTransform: "none" }}
          disabled={counter == 0 ? true : false}
          onClick={() => prevButton()}
        >
          <Typography>Anterior</Typography>
        </Button>
        <Button
          style={{ textTransform: "none" }}
          disabled={nextButtonDisabled()}
          onClick={() => nextButton()}
          endIcon={<ArrowForwardIosIcon />}
        >
          <Typography>Siguiente</Typography>
        </Button>
      </div>
    </div>
  );
}

export default Slides;
