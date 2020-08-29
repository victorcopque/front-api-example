import React from 'react';
import { useParams } from "react-router-dom";
import HelloWorld from './HelloWorld'

export default function ParamsExample() {

  const { id } = useParams();

  function example(value) {
    alert(value)
  }

  return (
    <>
      <p>Olá {id}</p>
      <p>Olá {id}</p>
      <HelloWorld general={example} treinamento="ola mundo" />
    </>
  )
}