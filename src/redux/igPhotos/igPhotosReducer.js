// Reducer is a function that takes the state as parameter and returns a transformed object
import json from '../../data.json';
import { DELETE_PHOTO } from './igPhotosTypes';

const initialState = json;

const igPhotosReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_PHOTO: 
      console.log("test", action);
      return state.filter(photo => photo._id !== action.payload);
    default: return state; 
  }
} 

export default igPhotosReducer;