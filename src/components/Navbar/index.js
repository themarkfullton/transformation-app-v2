import React from "react";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
    state = {
        open: false,
    }

    toggleMenu = () => {
        if (!this.state.open) {
            this.setState({ open: true });
        } else {
            this.setState({ open: false });
        }
    };

    render() {
        return (
            <div className="navbarWrapper">
                <div
                    className={this.state.open ? "navButton open" : "navButton"}
                    onClick={this.toggleMenu}
                >
                    <p>Navigation</p>
                </div>
                <div
                    className={this.state.open ? "navbar open" : "navbar"}
                >
                    <ul className={
                        this.state.open ? "menuNavContainer open" : "menuNavContainer"
                    }>

                        {/* ===========/ BEGIN NAV LINKS /======> */}
                        <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Home
                </NavLink>
                        </li>

              <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/clinics"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Trans-Friendly Clinics
                </NavLink>
              </li>

              <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/fashion"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Fashion Resources
                </NavLink>
              </li>

              <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/fitness"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Fitness Resources
                </NavLink>
              </li>

              <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/history"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  History Resources
                </NavLink>
              </li>

              <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/identity"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Identity Resources
                </NavLink>
              </li>

              <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/travel"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Travel Resources
                </NavLink>
                        </li>
                        
                                      <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/api"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Using the API
                </NavLink>
              </li>

                                      <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="/about"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  About Transformation
                </NavLink>
              </li>

              <li
                className={this.state.open ? "menuNavItem open" : "menuNavItem"}
              >
                <NavLink
                  to="#"
                  className="menuNavLink"
                  onClick={this.toggleMenu}
                >
                  Close Navigation
                </NavLink>
              </li>

                    {/* ===========/ END NAV LINKS /======> */}

                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;