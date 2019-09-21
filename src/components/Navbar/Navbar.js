import React from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import "./Navbar.css"
import { logout } from "../../redux/actions/cartActions";

class NavBar extends React.Component {
    handleLogOut = () => {
        this.props.logout();
    }
    activatingNavbar = () => {
        var icon = document.getElementById("myTopnav");
        if (icon.className === "topnav") {
            icon.className += " responsive";
        } else {
            icon.className = "topnav";
        }
    }
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="topnav" id="myTopnav">
                    <Link to="/" className="active">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/cart">Cart</Link>
                    {this.props.isLoggedIn ? <p onClick={(e) => { this.handleLogOut();}} id="logout">Log Out</p> : <div><Link to="/login">LogIn</Link><Link to="/signin">Sign Up</Link></div>}
                    <Link to="#" className="icon" onClick={() => {this.activatingNavbar();}}>
                        <i className="fa fa-bars"></i>
                    </Link>
                </div>
            </nav>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(NavBar);