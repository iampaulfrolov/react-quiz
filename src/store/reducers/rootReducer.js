import {combineReducers} from "redux"
import quizReducer from "./quizReducer"
import createReducer from "./createReducer"
import authReducer from "./authReducer"

export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  auth: authReducer
})
