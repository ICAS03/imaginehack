import React from 'react'
import '../Navbar/navbar.css'
import { BiHomeAlt2 } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdSchedule } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

const admin_navbar = () => {
  return (
    <>
    <nav className="navbar">
      
      <ul className="nav-menu">
        <li>
          <BiHomeAlt2 size={35} className="navbar-icon" /> 
          <Link to="/dashboard" className="nav-menu-link">
            Dashboard
          </Link>
        </li>
        <li>
          <BiMessageAltDetail size={35} className="navbar-icon" />Messages
        </li>
        <li>
          <IoPeopleOutline size={35} className="navbar-icon" />
          <Link to="/user-data" className="nav-menu-link">
            Applicants
          </Link>
        </li>
        <li>
          <MdSchedule size={35} className="navbar-icon" />Interview Schedule
        </li>
      </ul>
      <hr className="navbar-line" />
      <div className="settings">
        <p className="navbar-settings-title">SETTINGS</p>
        <ul className="nav-menu">
          <li>
            <FiSettings size={35} className="navbar-icon" />
            Settings
          </li>
          <li>
            <BiHelpCircle size={35} className="navbar-icon" />
            Help Center
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
}

export default admin_navbar