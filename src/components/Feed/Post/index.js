import React from 'react';
import Interaction from './Interaction';

export default function Post(props) {
  return (
    <div className="post">
      <div className="post-header">
        <img
          alt={`${props.info.name.split(' ')[0]}-profile`}
          src={props.info.image} />
        <p>{props.info.name}</p>
      </div>
      <div className="post-media">
        <img
          alt={`${props.info.name.split(' ')[0]}-post`}
          src={props.info.image} />
      </div>
      <Interaction name={props.info.name} />
    </div>
  )
}