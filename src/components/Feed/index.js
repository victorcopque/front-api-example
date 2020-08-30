import React, { useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import './style.css';
import { setPosts, selectPosts } from './feedSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Feed() {

  const dispatch = useDispatch();
  const postsRaw = useSelector(selectPosts);
  const posts = (postsRaw) ? JSON.parse(postsRaw) : [];

  useEffect(() => {
    async function getFriends() {
      return await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 19) + 1}`
      )
      .then((characters) => {
        return dispatch(setPosts(JSON.stringify(characters.data.results)))
      })
    }
    if(!postsRaw) getFriends() 
  }, [dispatch, postsRaw]);

  return (
    <div className="feed">
      {/* <button onClick={methodDoesNotExist}>Break the world</button>; */}
      {posts.map(info => {
        return <Post key={info.id} info={info} />
      })}
    </div>
  )
}