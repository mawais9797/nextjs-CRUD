import { createStore, combineReducers, applyMiddleware } from "redux";

import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import studentReducer from "./reducers/StudentReducer";
// store main reducers sy pass hony wala data save krna
const rootReducer = combineReducers({
  students: studentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

export default store;

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// // import userReducer from "./reducers/UserReducer";
// import studentReducer from "./reducers/StudentReducer";

// const reducer = combineReducers({
//   //   users: userReducer,
//   students: studentReducer,
// });
// // Define initial state
// console.log("first");
// // console.log("Store =", students);
// // User reducer

// // debugger;
// const middleware = [thunk];
// // Create the Redux store
// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
