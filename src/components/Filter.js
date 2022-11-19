import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFormValues, resetFormValues } from "../redux/formSlice";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";
import { FormControl, TextField, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import colors from "../theme/colors";

const useStyles = makeStyles({
  mainDiv: {
    alignSelf: "center",
    width: "50%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  form: {
    marginTop: "15px",
    alignSelf: "center",
    width: "80%",
    backgroundColor: colors.GRAY_CLASIC,
  },
  formControler: { width: "100%", backgroundColor: colors.GRAY_CLASIC },
  buttonsDiv: {
    alignSelf: "center",
    marginBottom: "1%",
  },
});

export default function Filter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const validation = Yup.object().shape({
    monto: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      monto: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      setDisabled(true);
      dispatch(setFormValues(values));
    },
  });

  useEffect(() => {
    dispatch(resetFormValues());
  }, []);
  return (
    <div className={classes.mainDiv}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormControl className={classes.formControler}>
          <TextField
            disabled={disabled}
            placeholder="Monto de dinero"
            label="Monto de dinero"
            id="monto"
            type="number"
            name="monto"
            onChange={formik.handleChange}
            value={formik.values.monto}
            error={formik.errors.monto}
          />
        </FormControl>
      </form>

      <br />
      <Button
        style={{ textTransform: "none" }}
        disabled={formik.values.monto == "" ? true : false}
        onClick={() => formik.handleSubmit()}
      >
        <Typography>Confirmar</Typography>
      </Button>
    </div>
  );
}
