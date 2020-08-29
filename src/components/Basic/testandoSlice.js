import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  // nome da "classe"
  name: 'testando',
  // atributos dentro da "classe"
  initialState: {
    hello: null,
    age: 0
  },
  // funções que modificam esses atributos
  reducers: {
    // nome da função
    incrementAge: (state, object) => {
      state.age = state.age + object.payload;
    },
    changeText: (state) => {
      state.hello = "Hello, world!"
    }
  },
});

//exporta os setters
export const { incrementAge, changeText } = slice.actions;

// getter
export const selectAge = state => state.testando.age;

export default slice.reducer;