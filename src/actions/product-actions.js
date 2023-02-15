import { Action_Types } from './constants';

export const fetchStart = () => {
  return {
    type: Action_Types.FETCH_START,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: Action_Types.FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchError = (data) => {
  return {
    type: Action_Types.FETCH_ERROR,
    payload: data,
  };
};
