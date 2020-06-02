import { getRequest } from './axiosHelper';

export const generateActionTypes = (namespace) => {
  return {
    REQUEST: `${namespace}REQUEST`,
    SUCCESS: `${namespace}SUCCESS`,
    FAIL: `${namespace}FAIL`,
    CLEAR: `${namespace}CLEAR`,
    SET_LOADING: `${namespace}SET_LOADING`,
  };
};

export const generateActions = (actionTypes, urlMask, config) => {
  const request = () => ({ type: actionTypes.REQUEST });
  const fail = (errorMessage = '') => ({
    type: actionTypes.FAIL,
    errorMessage,
  });
  const success = (data = []) => ({
    type: actionTypes.SUCCESS,
    data,
  });

  const get = (dispatch, data = {}) => {
    dispatch(request());

    return getRequest(urlMask, data, config)
      .then((response) => {
        dispatch(success(response.data));
      })
      .catch((error) => {
        console.log('[ERROR]:', error);
        const errorMessage = error.response.data;
        dispatch(fail(errorMessage));
      });
  };

  const setLoading = (data /*boolean*/) => ({
    type: actionTypes.SET_LOADING,
    data,
  });
  const clear = () => ({
    type: actionTypes.CLEAR,
  });

  return { clear, get, request, fail, success, setLoading };
};

export const initialState = {
  data: [],
  isLoading: false,
  loaded: false,
  hasError: false,
  errorMessage: '',
};

export const generateReducers = (actionTypes, handleData) => {
  return (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_LOADING:
        return {
          ...state,
          isLoading: action.data,
        };
      case actionTypes.REQUEST:
        return {
          ...state,
          loaded: false,
          isLoading: true,
        };
      case actionTypes.SUCCESS:
        let data = action.data;
        if (handleData) {
          data = handleData(data);
        }
        return {
          ...state,
          isLoading: false,
          loaded: true,
          hasError: false,
          data,
        };
      case actionTypes.FAIL:
        return {
          ...state,
          isLoading: false,
          loaded: true,
          hasError: true,
          errorMessage: action.errorMessage,
        };
      case actionTypes.CLEAR:
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
};
