// Actions are functions that return an object
import { DELETE_PHOTO } from './igPhotosTypes';

export const deletePhoto = id => {
  return {
    type: DELETE_PHOTO,
    payload: id
  }
}
