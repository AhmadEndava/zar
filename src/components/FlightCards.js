import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import dataset from "../mocks/dataset.json";
import colors from "../theme/colors";
import { tableColumns } from "../utility/constants";

const useStyles = makeStyles({
  mainDiv: {
    alignSelf: "center",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: '2%'
  },
  buttonsDiv : {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "15px",
    alignSelf: "center",
    width: "100%",
    marginBottom: "1%",
    //backgroundColor: colors.GRAY_CLASIC ,
  },
  buttons: {
     width: '50%', alignSelf: 'center'
  },
  
  
});

export default function FlightCards() {

  const classes = useStyles();
  const [mainArray, setMainArray] = useState([]);
  const monto = useSelector((state) => state.form.monto);

  const filteredArrayLength = dataset.filter((item) => {
    return item.price < monto;
  }).length;

  const sortByAvailability = () => {
    const newArray = [];
    const filterdArray = dataset.filter((price) => price.price < monto);

    Object.assign(newArray, filterdArray);
    newArray.sort((a, b) => {
      if (a.availability > b.availability) {
        return -1;
      }
      if (a.availability < b.availability) {
        return 1;
      }
      return 0;
    });

    setMainArray(newArray);
  };
  const sortByDate = () => {
    const newArray = [];
    const filterdArray = dataset.filter((price) => price.price < monto);

    Object.assign(newArray, filterdArray);
    newArray.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate > bDate) {
        return -1;
      }
      if (aDate < bDate) {
        return 1;
      }
      return 0;
    });

    setMainArray(newArray);
  };

  useEffect(() => {
    setMainArray(dataset);
  }, []);

  return (
    <div className={classes.mainDiv}>
      <div
        className={classes.buttonsDiv}
      >
        <Button variant="outlined" style={{ textTransform: "none" }} className={classes.buttons} onClick={() => sortByDate()}>Ordenar por fecha</Button>
        <br/>
        <Button variant="outlined" style={{ textTransform: "none" }}  className={classes.buttons}  onClick={() => sortByAvailability()}>
          Ordenar por disponibilidad
        </Button>
      </div>
      <br/>
      {filteredArrayLength === 0 && (
        <div
          style={{
            alignSelf: "center",
          }}
        >
          Lo sentimos! No hay resultados por ese precio.
        </div>
      )}
      {filteredArrayLength !== 0 && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow >
                  {tableColumns.map((column) => (
                    <TableCell
                    className={classes.tableHeader}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                     <strong> {column.label}</strong> 
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {mainArray
                  .filter((price) => price.price < monto)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={index.toString()}
                      >
                        <TableCell align='center'>{row.origin}</TableCell>
                        <TableCell align='center'>{row.destination}</TableCell>
                        <TableCell align='center'>{row.price}</TableCell>
                        <TableCell align='center'>{row.date}</TableCell>
                        <TableCell align='center'>{row.availability}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
}
