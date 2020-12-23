import React from 'react';
import {NavLink} from 'react-router-dom';
import {signOut} from '../redux/actions/authAction';
import {connect} from 'react-redux';
class SignedInLink extends React.Component {
    render() {
        return (
        <div>
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><NavLink to='/' onClick={this.props.signOut}>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">{this.props.user.initials}</NavLink></li>
            </ul>
           
        </div>
              
        )
    }
      
}
const mapStateToProps = (state, ownProps) => {
    
    return {
        user : state.auth.profile,
        // user : state.firestore.data.users[]
    }
}

export default connect(mapStateToProps,{signOut})(SignedInLink);