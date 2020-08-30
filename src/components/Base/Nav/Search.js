import React from "react";
import { useFormik } from "formik";

export default function Search() {

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const { getFieldProps } = formik;

  return (
    <>
      <form className="form-search-nav" onSubmit={formik.handleSubmit}>
        <input type="text" placeholder="Search" id="search" {...getFieldProps("search")} />
      </form>
    </>
  )
}