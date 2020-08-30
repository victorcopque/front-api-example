import React from 'react';

export default function Company(props) {
  return (
    <li className="company-item">
      <img alt="company-logo" src={props.info.image}/>
      <div>
        <p className="company-name">{props.info.name}</p>
        <p className="followed-count">Followed by {Math.floor(Math.random() * 19) + 1} friends</p>
      </div>
      <button
        className="button-follow"
        onClick={() => props.hideCompany(props.info.id)}
      >Follow</button>
    </li>
  )
}