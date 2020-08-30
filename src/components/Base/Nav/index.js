import React from 'react';
import { IoMdHome, IoIosSend, IoIosCompass, IoIosHeartEmpty, IoIosPerson } from "react-icons/io";
import IconContainer from '../../General/IconContainer';
import Search from './Search';

export default function Nav() {

  function itemGenerator(icon) {
    return(
      <li>
        <IconContainer size={25}>{icon}</IconContainer>
      </li>
    )
  }

	return (
		<div className="nav">
      <div className="nav-container">
        <img alt="insta-logo" src="./assets/image/instagram.png" />
        <Search /> 
        <ul className="nav-itens-container">
          {itemGenerator(<IoMdHome />)}
          {itemGenerator(<IoIosSend />)}
          {itemGenerator(<IoIosCompass />)}
          {itemGenerator(<IoIosHeartEmpty />)}
          {itemGenerator(<IoIosPerson />)}
        </ul>
      </div>
		</div>
	)
}