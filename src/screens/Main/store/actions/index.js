import { generateActions } from '../../../../utils/reduxRequestHelper';
import actionTypes from '../types';

const URL = 'https://api.unsplash.com/photos/';
const data = {
  client_id: 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
};

const imagesActions = generateActions(actionTypes, URL);

const loadImages = () => {
  return (dispatch) => {
    imagesActions.get(dispatch, data);
  };
};

export { loadImages };
