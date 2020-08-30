import React from "react";
import { useFormik } from "formik";

export default function Comment() {

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const { getFieldProps } = formik;

  return (
    <>
      <form className="post-comment" onSubmit={formik.handleSubmit}>
        <input type="text" placeholder="Add a comment..." id="comment" {...getFieldProps("comment")} />
      </form>
    </>
  )
}