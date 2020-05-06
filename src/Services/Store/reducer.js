import {STORE_DATA} from './constant';

const initialState = {
  storeData: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return {...state, storeData: action.data};
    default:
      return state;
  }
};
export default storeReducer;
