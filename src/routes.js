import React from "react";
import {Switch,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/cart' component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignUp} />
    </Switch>
);