import React from 'react';
import { useParams } from "react-router-dom";

export default function ParamsExample() {

  const { id } = useParams();

  return (
    <>
      <p>Olá {id}</p>
    </>
  )
}