export const signIn = credential => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
        credential.email, credential.password
    ).then(()=>{
        console.log('log in success');
        dispatch({
            type : 'LOGIN_SUCESS'
        })
    })
    .catch(()=> {
        dispatch({
            type : 'LOGIN_ERROR'
        })
    })
}
export const signUp = credential => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(credential.email, credential.password)
    .then((resp)=>{
        return firestore.collection('users').doc(resp.user.uid).set({
            firstName : credential.firstName,
            lastName : credential.lastName,
            initials : credential.firstName[0] + credential.lastName[0]
        }).then(()=>{
            dispatch({
                type : 'SIGNUP_SUCCESS'
            })

        })
        .catch((err)=>{
             dispatch({
                type : 'SIGNUP_ERROR',
                err
             })
        })
    })
}
export const signOut = () => (dispatch,getState,{getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(()=>{
        dispatch({
            type : 'SIGNOUT_SUCCESS'
        })
    })
}