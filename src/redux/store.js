import { createStore } from 'redux';
import igPhotosReducer from './igPhotos/igReducer';

const store = createStore(igPhotosReducer);

export default store;