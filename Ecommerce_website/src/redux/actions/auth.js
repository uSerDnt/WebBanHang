// Corrected import statement without curly braces
import AuthTypes from "./types/auth";

const CurrentUser = (payload) => {
  return {
    type: AuthTypes.CURRENT_USER,
    payload: payload,
  };
};

// Exporting an object with CurrentUser as a property
export default {
  CurrentUser,
};
