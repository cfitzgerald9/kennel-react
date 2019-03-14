import React, { Component } from "react"
import { Link } from "react-router-dom"



class NavBar extends Component {
    logout() {
        sessionStorage.clear();
        localStorage.clear();
      }
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                <li className="nav-item">
                    {sessionStorage.getItem("credentials") === null &&
                    localStorage.getItem("credentials") === null ? (
                    <Link className="nav-link" to="/login">Sign In</Link>
                                ) : (
                    <Link className="nav-link" to="/" onClick={this.logout}>Sign Out</Link>
                    )}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar