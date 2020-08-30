import React, { useState, useEffect } from 'react';
import { IoIosSend, IoIosHeartEmpty, IoIosChatbubbles } from "react-icons/io";
import IconContainer from '../../General/IconContainer';
import Comment from './Comments';
import axios from 'axios';

export default function Interaction(props) {

  const [quote, setQuote] = useState("");

  const getAQuote = async () => {
    await axios.get("https://api.kanye.rest")
    .then((quote) => setQuote(quote.data.quote))
  };

  function itemGenerator(icon) {
    return(
      <li>
        <IconContainer size={25}>{icon}</IconContainer>
      </li>
    )
  }

  useEffect(() => {
    getAQuote();
  }, []);

  return (
    <div className="post-footer">
      <ul className="reaction-list">
        {itemGenerator(<IoIosHeartEmpty />)}
        {itemGenerator(<IoIosSend />)}
        {itemGenerator(<IoIosChatbubbles />)}
      </ul>
      <div className="description">
        <p><span>{props.name}</span> {quote}</p>
        <p className="date-published">{Math.floor(Math.random() * 19) + 1} hours ago</p>
      </div>
      <Comment />
    </div>
  )
}