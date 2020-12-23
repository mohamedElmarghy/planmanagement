import React from 'react';
import { connect } from 'react-redux';
class ProjectSummary extends React.Component {
    render() {
     if(this.props.project){
        return (
       <div className="card z-depth-0 project-summary">
         <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{this.props.project.title}</span>
            <p>{this.props.project.content}</p>
            <p className="gery-text">posted by {this.props.project.authFirstName + ' '+ this.props.project.authLastName}</p>
    
            <p className="grey-text">3rd September, 2am</p>
         </div>
       </div>
        )
    }
  
  else {
    return null
  }
 } 
}
const mapStateToProps = (state, ownProps) => {
  return {
      user : state.auth.profile,
      // user : state.firestore.data.users[]
  }
}
export default connect(mapStateToProps)(ProjectSummary);