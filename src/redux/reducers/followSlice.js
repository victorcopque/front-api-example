import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  // nome da "classe"
  name: 'follow',
  // atributos dentro da "classe"
  initialState: {
    companies: null,
    followers: []
  },
  // funções que modificam esses atributos
  reducers: {
    // nome da função
    setCompanies: (state, object) => {
      state.companies = object.payload;
    },
    setFollowers: (state, object) => {
      state.followers = object.payload;
    }
  },
});

//exporta os setters
export const { setCompanies, setFollowers } = slice.actions;

// getter
export const selectCompanies = state => state.follow.companies;
export const selectFollowers = state => state.follow.followers;

export default slice.reducer;