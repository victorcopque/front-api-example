import React from 'react';
import { IconContext } from "react-icons";

export default function IconContainer(props) {
  return (
    <IconContext.Provider value={{ size: props.size }}>
      <div>
        {props.children}
      </div>
    </IconContext.Provider>
  )
}