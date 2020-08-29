import React from 'react';

export default function HelloWorld(props) {

  return (
    <>
      <button onClick={() => props.general("name")}>Botão teste</button>
    </>
  )
}