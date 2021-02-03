import { createStore } from 'redux';
import igPhotosReducer from './igPhotos/igPhotosReducer';

const store = createStore(igPhotosReducer);

export default store;