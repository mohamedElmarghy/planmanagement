import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import {projectReducer} from "./projectsReducer";
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
export default combineReducers({
    projects : projectReducer,
    authErr : authReducer,
    firestore : firestoreReducer,
    auth : firebaseReducer
})