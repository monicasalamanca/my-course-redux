import { DELETE_COMMENT } from './igTypes';

export const deleteComment = (photoId, commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: { photoId, commentId }
  }
}