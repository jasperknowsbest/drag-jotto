import { actionTypes } from "../actions";

/**
 * @function secretWordReducer
 * @param {array} state - Array of guessed queens.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state
 */

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
