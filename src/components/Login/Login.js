import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login,thunk_action_creator } from "../../redux/actions/cartActions"
import {auth} from "./firebase"

class Login extends Component {
  handleLogIn = () => {
    this.props.login();
  }
  loggedInAction = (e) => {
    e.preventDefault();
    const loginForm = document.querySelector('#login-form');
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    console.log(email,password);
    auth.signInWithEmailAndPassword(email,password).then(cred => {
      this.props.thunk_action_creator();
      this.props.history.push('/')
    })
  }
  render() {
    return (
      <div className="row">
        <form id="login-form" className="col s12" onSubmit={(e) => { this.handleLogIn(); this.loggedInAction(e); }}>
          <div className="input-field col s12" style={{ "marginTop": "50px" }}>
            <input id="login-email" type="email" className="validate" placeholder="email" required />
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="login-password" type="password" className="validate" placeholder="password" required />
            </div>
          </div>
          <button className="waves-effect waves-light btn">Log In</button>
        </form>
      </div>
    )
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    thunk_action_creator: () => dispatch(thunk_action_creator())
  }
}

export default connect(null, MapDispatchToProps)(Login);