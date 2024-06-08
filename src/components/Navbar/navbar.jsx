import React from 'react'
import '../Navbar/navbar.css'
import { BiHomeAlt2 } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdSchedule } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { CgList } from "react-icons/cg";
import { Link } from 'react-router-dom';


const navbar = () => {
  return (
    <>
    <nav className="navbar">
      
      <ul className="nav-menu">
        <li>
          <BiHomeAlt2 size={20} className="navbar-icon" /> 
          <Link to="/dashboard" className="nav-menu-link">
            Dashboard
          </Link>
        </li>
        <li>
          <BiMessageAltDetail size={20} className="navbar-icon" />Messages
          {/*<Link to="/dashboard" className="nav-menu-link">
            Messages
          </Link>*/}
        </li>
        <li>
          <IoPeopleOutline size={20} className="navbar-icon" />Applicants
          {/*<Link to="/all-applicants" className="nav-menu-link">
            Applicants
          </Link>*/}
        </li>
        <li>
          <HiOutlineClipboardList size={20} className="navbar-icon" /> 
          <Link to="/CVUpload" className="nav-menu-link">
            Uploaded Resume
          </Link>
        </li>
        <li>
          <MdSchedule size={20} className="navbar-icon" /> My Schedule
          {/*<Link to="/dashboard" className="nav-menu-link">
            My Schedule
          </Link>*/}
        </li>
        <li>
          <BiSearch size={20} className="navbar-icon" /> 
          <Link to="/start-interview" className="nav-menu-link">
            Digital Interview
          </Link>
        </li>
        <li>
          <CgList size={20} className="navbar-icon" />My Application
          {/*<Link to="/applicant" className="nav-menu-link">
            My Application
          </Link>*/}
        </li>
      </ul>
      <hr className="navbar-line" />
      <div className="settings">
        <p className="navbar-settings-title">SETTINGS</p>
        <ul className="nav-menu">
          <li>
            <FiSettings size={20} className="navbar-icon" />
            Settings
          </li>
          <li>
            <BiHelpCircle size={20} className="navbar-icon" />
            Help Center
          </li>
        </ul>
      </div>
    </nav>
  </>
);
  
}

export default navbar