// Corrected import statement without curly braces
import AuthTypes from "./types/auth";

const CurrentUser = (payload) => {
  return {
    type: AuthTypes.CURRENT_USER,
    payload: payload,
  };
};

export default {
  CurrentUser,
};
