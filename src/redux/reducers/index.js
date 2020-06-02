import { combineReducers } from 'redux';
import GalleryImagesReducer from '../../screens/Main/store/reducers';

export default combineReducers({
  images: GalleryImagesReducer,
});
