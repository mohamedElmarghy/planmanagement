import React, { Component } from 'react'
import { signIn } from '../redux/actions/authAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    if (this.props.userId) {
      return <Redirect to='/' />
    }
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
        <div>
          {this.props.errMessage ? <p>{this.props.errMessage}</p>:null}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    errMessage : state.authErr.authError,
    userId : state.auth.auth.uid
  }
}
export default connect(mapStateToProps,{signIn})(SignIn)