import React from "react"
import {NavLink, Navlink} from "react-router-dom"

export default function Navbar() {
        return(
            <header className="header">
                   <nav className="navbar">
                        <div className="wrapper">
                            <NavLink to="/" exact activeClassName="nav-active" className="nav-link">
                                    Home
                                </NavLink>
                            <ul>
                                <NavLink to="/post" className="nav-link" activeClassName="nav-active">
                                    Blog Posts
                                </NavLink>
                                <NavLink to="/project" className="nav-link" activeClassName="nav-active">
                                    Projects
                                </NavLink>
                                <NavLink to="/about" className="nav-link" activeClassName="nav-active">
                                    About me
                                </NavLink>
                            </ul>
                        </div>
                   </nav>
            </header>
        )
}