import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login,thunk_action_creator } from "../../redux/actions/cartActions"
import { auth } from "./firebase"


class SignUp extends Component {
    handleLogIn = () => {
        const signupForm = document.querySelector('#signup-form');
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;
        if (email !== "" && password !== "") {
            this.props.login();
        }
    }
    sendingDatatoServer = (e) => {
        e.preventDefault();
        const signupForm = document.querySelector('#signup-form');
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;
        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            this.props.thunk_action_creator();
            this.props.history.push('/');
        })
    }
    render() {
        return (
            <div className="row" id="form">
                <form className="col s12" id="signup-form" onSubmit={(e) => { this.sendingDatatoServer(e); this.handleLogIn() }}>
                    <div className="input-field col s12" style={{ "marginTop": "50px" }}>
                        <input id="signup-email" type="email" className="validate" placeholder="Email" required />
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signup-password" type="password" className="validate" placeholder="Password" required />
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn">Sign Up</button>
                </form>
            </div>
        )
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login()),
        thunk_action_creator: () => dispatch(thunk_action_creator()),
    }
}

export default connect(null, MapDispatchToProps)(SignUp);
