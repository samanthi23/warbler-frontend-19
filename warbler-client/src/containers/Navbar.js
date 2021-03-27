import React, { Component } from "react";
// import from React and destructure Component from React

import { Link } from "react-router-dom";
// since this is a container we also want to connect it to our Redux store
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
      {/* return some JSX */ }
      {/* start with nav element */}
      {/* <div className="container-fluid"> */}
        <Link to="/" className="navbar-brand">
          <img src="" alt="Warbler Home" />
        </Link>
        { /* </div> */}
        
        {/* navbar-right pushes everything to the right */}
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Log in</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

// need current User for Navbar


// pass in state from redux store
function mapStateToProps(state) {
  return {
    // everything we get from the current user
    
    currentUser: state.currentUser
  };
}


// no dispatch to props so just pass in null
// wrap this again in our Navbar (mapStateToProps)(Navbar)
export default connect(mapStateToProps)(Navbar);
