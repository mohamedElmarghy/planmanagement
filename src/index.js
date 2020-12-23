import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App';
import fbConfig from './config/fbConfig';
import reducers from './components/redux/reducers';
import thunk from 'redux-thunk';
import { reduxFirestore,getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider,getFirebase, isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app'
const store = createStore(reducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig)
      )
    );
    const rrfConfig = {
      userProfile: 'users',
      useFirestoreForProfile: true
    }
const rrfProps = {
    firebase,
    config: rrfConfig,fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
   
  };
  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.auth.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
        return children
}
  ReactDOM.render(
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}><AuthIsLoaded><App /></AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
