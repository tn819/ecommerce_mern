import React from "react";

import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { connect } from "react-redux";
import "./css/App.css";

import auth from "./components/auth";
