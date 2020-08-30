import React, { useEffect, useState } from 'react';
import Friend from './Friend';
import axios from 'axios';
import './style.css';

export default function Stories() {

  const [stories, setStories] = useState([])
  const [listSeen, setListSeen] = useState([])

  async function getFriends() {
    return await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 19) + 1}`
    )
    .then((characters) => setStories(characters.data.results))
  }

  function hideActiveStory(friendId) {
    setListSeen([...listSeen, friendId])
  }

  useEffect(() => {
    getFriends()
  }, []);

  return (
    <div className="stories-container">
      <ul>
        {stories.map((friend) => {
          let hideActive = listSeen.includes(friend.id)
          return <Friend key={friend.id} hideActive={hideActive} friend={friend} hideActiveStory={hideActiveStory} />
        })}
      </ul>
    </div>
  )
}