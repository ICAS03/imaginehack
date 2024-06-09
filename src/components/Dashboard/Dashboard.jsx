import React from 'react'
import Navbartop from '../Navbar/navbartop';
import { FaArrowRight } from "react-icons/fa";
import { JobOpening , ApplicantSummary } from './ApplicationSummary.jsx';
import '../Dashboard/Dashboard.css';
import Admin_Navbar from '../Navbar/admin_navbar.jsx';
import { margin } from '../../../node_modules/@mui/system/esm/spacing';

const Dashboard = () => {
    const date = new Date();
  return (
    <>
    <Admin_Navbar></Admin_Navbar>
    <div className="page-contents">
      <Navbartop />

      <div className="ad-greeting">
        <p className="ad-greeting-title">Good Afternoon!</p>
        <p className="ad-greeting-desc">
          Here are the job listings statistics report as of{" "}
          {date.toDateString()}.
        </p>
      </div>
      <main>
        <section className="ad-section-btn-actions">
          <div className="ad-btn-actions">
            <p className="ad-btn-actions-number">76</p>
            <p className="ad-btn-actions-desc">New candidates to review</p>
            <FaArrowRight size={20} className="btn-actions-icon" />
          </div>
          <div className="ad-btn-actions">
            <p className="ad-btn-actions-number">3</p>
            <p className="ad-btn-actions-desc">Scheduled for today</p>
            <FaArrowRight size={20} className="btn-actions-icon" />
          </div>
          <div className="ad-btn-actions">
            <p className="ad-btn-actions-number">24</p>
            <p className="ad-btn-actions-desc">Messages received</p>
            <FaArrowRight size={20} className="btn-actions-icon" />
          </div>
        </section>

        <section className="ad-section-job-statistics">
          <div className="ad-card-job-stats">
          <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <th className="table-head-cell">Name</th>
            <th className="table-head-cell">Contact</th>
            <th className="table-head-cell">Email</th>
            <th className="table-head-cell">Position 1</th>
            <th className="table-head-cell">Position 2</th>
            <th className="table-head-cell">View More</th>
          </tr>
        </thead>
        <tbody>
            <tr className="table-row">
              <td className="table-cell">John Doe</td>
              <td className="table-cell">+60125874521</td>
              <td className="table-cell">johndoe@gmail.com</td>
              <td className="table-cell">Software Engineer</td>
              <td className="table-cell">UX Engineer</td>
              <td className="table-cell">
                <button
                  className="view-more-button"
                >
                  Review
                </button>
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">MAry Jona</td>
              <td className="table-cell">+60128556521</td>
              <td className="table-cell">maruha@gmail.com</td>
              <td className="table-cell">Graphic Desinging</td>
              <td className="table-cell">Marketing Manager</td>
              <td className="table-cell">
                <button
                  className="view-more-button"
                >
                  Review
                </button>
              </td>
            </tr>
        </tbody>
      </table>
      <div className="ad-card-jobs-stats-content">
        
              <div className="ad-card-stats-overview">
              <div className="table-container-auto" >
     
    </div>
              
              </div>
            </div>
          </div>
          <div className="ad-card-right-content">
            <div className="ad-card-jobs-open">
              <JobOpening />
            </div>
            <div className="ad-card-applicant-summary">
              <ApplicantSummary />
            </div>
          </div>
        </section>

        
      </main>
    </div>
  </>
);
  
}

export default Dashboard;