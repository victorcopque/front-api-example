import React from 'react';
var mixpanel = require('mixpanel-browser');

export default function Friend(props) {
  return (
    <li onClick={() => {
      mixpanel.track("Video play", {"genre": "hip-hop", "duration in seconds": 42});
      props.hideActiveStory(props.friend.id)
    }}>
      <img
        className={(props.hideActive) ? "storySeen" : "storyActive" }
        alt="friend-stories"
        src={props.friend.image}
      />
      <p>{props.friend.name.split(" ")[0]}</p>
    </li>
  )
}