import {CONCEPT_DATA} from './constant';

const initialState = {
  conceptData: [],
};

const conceptReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONCEPT_DATA:
      return {...state, conceptData: action.data};
    default:
      return state;
  }
};
export default conceptReducer;
