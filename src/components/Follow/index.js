import React from 'react';
import Suggestions from './Suggestions';
import './style.css';

export default function Follow() {
  return (
    <div className="follow-container">
      <div className="user-profile">
        <img alt="user-profile" src="./assets/image/bot-icon.png" />
        <p>victorcopque</p>
      </div>
      <Suggestions />
    </div>
  )
}