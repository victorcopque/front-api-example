import React, { useState } from "react";

export default function UseStateExample() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [values, setValues] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({
      name,
      email,
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <pre>{JSON.stringify(values)}</pre>
    </>
  );
}