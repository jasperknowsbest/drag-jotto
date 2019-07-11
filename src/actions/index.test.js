import { correctGuess, actionTypes } from "./index.js";

describe("correctGuess Action", () => {
  test("returns an action with the type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
