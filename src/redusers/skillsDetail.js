import { DETAIL_CHOICE, DETAIL_REQUEST, DETAIL_RESULT, DETAIL_FAILURE } from '../actions/actionTypes';

const stateDet = {
  data: {},
  loading: false,
  error: null,
  choice: 0
}
export default function skillsDetail(state = stateDet, action) {
  switch(action.type) {
    case DETAIL_CHOICE:
      const { choice } = action.payload;
      /*return { ...state, choice};*/
      state.choice = choice;
      console.log(state);
      return state;
    case DETAIL_REQUEST:
      return { ...state, loading: true, error: null};
    case DETAIL_RESULT:
      const { data } = action.payload;
      return { ...state.state.state.state.state, data, loading: false, error: null};
    case DETAIL_FAILURE:
      const { error } = action.payload;
      return { ...state.state, loading: false, error};
    default: return { state };
  }
}
