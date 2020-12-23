import React from 'react';
import { NavLink } from 'react-router-dom';
class SignedOutLink extends React.Component {
    render() {
        return (
        <div>
            <ul className="right">
                <li><NavLink to='/signUp'>Signup</NavLink></li>
                <li><NavLink to='/signIn'>Login</NavLink></li>
            </ul>
         </div>
        )
    }
   
}
export default SignedOutLink;