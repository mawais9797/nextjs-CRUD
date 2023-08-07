import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import userReducer from "./reducers/UserReducer";
// import studentReducer from "./reducers/StudentReducer";

const reducer = combineReducers({
  //   users: userReducer,
  students: studentReducer,
});

// Define initial state

// User reducer

// debugger;
const middleware = [thunk];
// Create the Redux store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import { configureStore } from "@reduxjs/toolkit"
// import counterReducer from "@/features/counter/counterSlice"
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })

// import studentReducer from "@/app/reducers/StudentReducer";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     user: studentReducer,
//   },
// });

// export default store;
