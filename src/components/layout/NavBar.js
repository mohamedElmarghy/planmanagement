import React from 'react';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        const link = this.props.userId?<SignedInLink /> : <SignedOutLink />
        return (
            <nav className="nav-wrapper grey darken-3">
            <div className="container">
              <Link to='/' className="brand-logo">ProjectPlan</Link>
              {link}
            </div>
          </nav>
           
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        userId : state.auth.auth.uid,
        // user : state.firestore.data.users[]
    }
}
export default connect(mapStateToProps)(NavBar);