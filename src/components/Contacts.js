import React from "react";
import Grid from "@mui/material/Grid";
import emailIcon from "../assets/icons/emailIcon.png";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  form: {
    marginTop: "15px",
    alignSelf: "center",
    width: "80%",
  },

  gridDiv: { alignSelf: "center", marginBottom: "3%", width: "50%" },
});

export default function Contacts() {
  const classes = useStyles();
  return (
    <div className={classes.mainDiv}>
      <div className={classes.gridDiv}>
        <Grid container>
          <Grid item xs>
            <img
              style={{ marginLeft: "50%" }}
              src={emailIcon}
              alt="email"
              width="40"
            />
          </Grid>
          <Grid style={{ marginTop: "3%" }} item xs>
            <a href="hello@zarego.com">hello@zarego.com</a>
          </Grid>
        </Grid>
      </div>
      <div className={classes.gridDiv}>
        <Grid container>
          <Grid item xs>
            <PhoneIcon style={{ marginLeft: "50%" }} />
          </Grid>
          <Grid style={{ marginTop: "3%" }} item xs>
            +54 (911) 5588 2330
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
