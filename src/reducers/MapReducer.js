import {
  MAP_INDEX
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  spinner: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAP_INDEX:
      return { ...state };
    default:
      return state;
  }
};
