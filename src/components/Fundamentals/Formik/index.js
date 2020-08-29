import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

import Formik1 from "./FormikStep1";
import Formik2 from "./FormikStep2";
import Formik3 from "./FormikStep3";

export default function FormikHandler() {

  let { formikType } = useParams();
  formikType = parseInt(formikType)

  if(formikType === 1) return <Formik1 />
  if(formikType === 2) return <Formik2 />
  return <Formik3 />
};