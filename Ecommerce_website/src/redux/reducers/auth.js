import AuthTypes from "../actions/types/auth";

const initialState = {
  currentUser: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.payload,
      });

    default:
      return state;
  }
};
export default authReducer;
