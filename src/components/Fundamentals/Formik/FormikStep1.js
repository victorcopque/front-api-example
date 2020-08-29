import React from "react";

export default function Formik1() {
  return (
    <main className="App">
      <h1>Sign Up 1</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
};