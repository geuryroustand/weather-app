import { initialState } from "../store";

export const mainReducer = (state = initialState.countries, action) => {
  switch (action.type) {
    case "FETCH_CITY":
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
};
