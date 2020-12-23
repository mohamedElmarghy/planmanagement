import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ProjectSummary from './ProjectSummary';
import { Redirect } from 'react-router-dom';
class ProjectDetail extends React.Component {
    render() {
        if (!this.props.userId) {
            return <Redirect to='/signIn' />
        }
        if (this.props) {
        return (
            <div>
                <ProjectSummary project={this.props.project} />
            </div>
        )
    }
}
}
const mapStateToProps = (state, ownProps) => {
    const projects = state.firestore.data.projects;
    return {
        project :  projects?state.firestore.data.projects[ownProps.match.params.id]:null,
        userId : state.auth.auth.uid
    }
}
export default compose(firestoreConnect(()=>['projects']),connect(mapStateToProps))(ProjectDetail);