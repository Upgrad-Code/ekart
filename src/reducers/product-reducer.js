import { Action_Types } from '../actions/constants';
console.log(Action_Types);

export const initialState = {
  isLoading: false,
  products: [],
  isError: null,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case Action_Types.FETCH_START:
      return { ...state, isLoading: true, isError: null };
    case Action_Types.FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case Action_Types.FETCH_ERROR:
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
