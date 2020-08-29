import React from "react";
import { useFormik } from "formik";

export default function Formik2() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { values } = formik;
  return (
    <main className="App">
      <h1>Sign Up 2</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input
          onChange={formik.handleChange}
          value={values.name}
          onBlur={formik.handleBlur}
          type="text"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={formik.handleChange}
          value={values.email}
          onBlur={formik.handleBlur}
          type="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={formik.handleChange}
          value={values.password}
          onBlur={formik.handleBlur}
          type="password"
          id="password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};