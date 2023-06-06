import React from "react";
import "../App.css";
import Dropdown from "react-bootstrap/Dropdown";
import LoginIcon from "../images/Enter.png";
import whiteProfile from "../images/profile-white.png";
import logoutIcon from "../images/Out.png";

export default function Navbaar() {

    const handleLogOut = async () => {
        // remove token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        // redirect to login page
        window.location.href = '/home';
    }

    return (
        <div>
            <nav className="navbaar mb-3">
          <div
            className="d-flex flex-row justify-content-between align-items-center w-100"
          >
            <div className="d-flex justify-content-between">
              <div className="col-1 ">
                <a href="/home" className="text-decoration-none text-dark">
                  PMS
                </a>
              </div>
              {
                localStorage.getItem('token') ?
                <div className="col-2 ">
                <a href="/dashboard" className="text-decoration-none text-dark">
                  Dashboard
                </a>
              </div>
              :
              null
              }
            </div>
            <ul
              className="d-flex flex-row col-3 list-unstyled justify-content-between align-items-center m-0"
            >
              
            </ul>
            <ul
              className="d-flex flex-row col-2 list-unstyled justify-content-between align-items-center m-0"
            >
              {
                localStorage.getItem('token') ?
                <li className="col-sm-12 small">
                  <a href="/logout" className="text-decoration-none text-dark">
                    Log Out
                  </a>
                </li>
                :
                <>
          
                <li className="col-sm-4 small">
                <a href="/admin-login" className="text-decoration-none text-dark">
                  Admin
                </a>
              </li>
                <li className="col-sm-4 small">
                <a href="/login" className="text-decoration-none text-dark">
                  Login
                </a>
              </li>
              <li className="col-sm-4  small">
                <a href="/signup" className="text-decoration-none text-dark">
                  Sign Up
                </a>
              </li>
                </>
              }
            </ul>
          </div>
        </nav>
        </div>
    )
}