// Reducer is a function that takes the state as parameter and returns a transformed object
import json from '../../data.json';
import { DELETE_PHOTO, DELETE_COMMENT } from './igTypes';

const initialState = json;

const igPhotosReducer = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_PHOTO: 
      // console.log("DELETE_PHOTO", action);
      return state.filter(photo => photo._id !== action.payload);
    case DELETE_COMMENT: 
      // console.log("DELETE_COMMENT", action, "STATE", state);
      const updatedPhotos = state.map(photo => {
        // return the original photo if it doesn't match the photoId
        if (photo._id !== action.payload.photoId) {
          return photo
        }

        const filteredComments = photo.comments.filter(comment => comment.comment.id !== action.payload.commentId);
        const photoUpdatedComments = { ...photo, comments: filteredComments }

        return photoUpdatedComments;

      });

      return updatedPhotos;

    default: return state; 
  }
} 

export default igPhotosReducer;