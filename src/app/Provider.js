"use client";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "./src/redux/store";
import store from "./store";

const App = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
