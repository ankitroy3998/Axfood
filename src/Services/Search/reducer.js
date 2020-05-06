import {SEARCH_DATA} from './constant';

const initialState = {
  searchData: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      return {...state, searchData: action.data};
    default:
      return state;
  }
};
export default searchReducer;
