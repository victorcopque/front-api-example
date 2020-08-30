import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  // nome da "classe"
  name: 'feed',
  // atributos dentro da "classe"
  initialState: {
    posts: null,
    people: {},
  },
  // funções que modificam esses atributos
  reducers: {
    // nome da função
    setPeople: (state, object) => {
      state.people = object.payload[0];
    },
    setPosts: (state, object) => {
      state.posts = object.payload;
    },
  },
});

//exporta os setters
export const { setPeople, setPosts } = slice.actions;

// getter
export const selectPeople = state => state.feed.people;

export const selectPosts = state => state.feed.posts;

export default slice.reducer;