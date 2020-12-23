import history from '../../../history';
export const createProject = (newProject, user) =>   (dispatch, getState, {getFirebase, getFirestore}) => {
   // make async call to db
   const firestore = getFirestore();
   const profile = getState().auth.profile;
   firestore.collection('projects').add({
       ...newProject,
       authFirstName : profile.firstName,
       authLastName : profile.lastName
   }).then(()=>{
    dispatch({
        type : 'CREATE_PROJECT',
        payload : newProject
    });
   })

//   history.push('/');
}
