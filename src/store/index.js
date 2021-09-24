import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
  countries: [],

  // coord: {
  //   lon: 0,
  //   lat: 0,
  // },
  // weather: [],
  // base: "",
  // main: {
  //   temp: 0,
  //   pressure: 0,
  //   humidity: 0,
  //   temp_min: 0,
  //   temp_max: 0,
  // },
  // visibility: 0,
  // wind: {
  //   speed: 0,
  //   deg: 0,
  // },
  // clouds: {
  //   all: 0,
  // },
  // dt: 0,
  // sys: {
  //   type: 0,
  //   id: 0,
  //   message: 0,
  //   country: "",
  //   sunrise: 0,
  //   sunset: 1485794875,
  // },

  // id: 0,
  // name: "",
  // cod: 0,
};

const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEV
    ? composeEnhancers(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);

export default configureStore;
