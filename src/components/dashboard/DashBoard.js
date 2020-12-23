import React from 'react';
import { connect } from 'react-redux';
import Notification from './Notification';
import ProjectList from '../project/ProjectList';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
class DashBoard extends React.Component {
    render() {
      if (!this.props.userId) {
        return <Redirect to='/signIn' />
      }
        return (
        <div className="dashboard container">
            <div className="row">
              <div className="col s12 m6">
                <ProjectList projects={this.props.projects}/>
              </div>
              <div className="col s12 m5 offset-m1">
                <Notification />
              </div>
            </div>
      </div>
        )
    }
}
const mapStateToProps = state => {
 
  return {
    projects : state.firestore.ordered.projects,
    userId : state.auth.auth.uid
  }
}
export default compose(firestoreConnect(()=>['projects']),connect(mapStateToProps))(DashBoard);