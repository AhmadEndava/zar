import * as React from "react";
import Grid from "@mui/material/Grid";
import logo from "../assets/images/logo.png";
import Paper from "@mui/material/Paper";
import "../assets/css/headerCss.css";

export default function Header() {
  return (
    <div style={{width: '100%'}}>
      <Paper className="paper" elevation={10}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <img className="img" src={logo} />
          </Grid>
          <Grid item xs={11}>
            <div className="title">
              <p id="headerText">Aerolíneas Zarego</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
