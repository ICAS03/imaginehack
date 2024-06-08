import React from 'react'
import Navbar from '../Navbar/navbar';
import Navbartop from '../Navbar/navbartop';
import { FaArrowRight } from "react-icons/fa";
import JobStatsCard from './JobStatsCard.jsx';
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineClipboardList } from "react-icons/hi";
import { JobOpening , ApplicantSummary } from './ApplicationSummary.jsx';
import JobUpdates from './JobUpdates.jsx';

import '../Dashboard/Dashboard.css';

const Dashboard = () => {
    const date = new Date();
  return (
    <>
    <Navbar/>
    <div className="page-contents">
      <Navbartop />

      <div className="greeting">
        <p className="greeting-title">Good Afternoon!</p>
        <p className="greeting-desc">
          Here are the job listings statistics report as of{" "}
          {date.toDateString()}.
        </p>
      </div>
      <main>
        <section className="section-btn-actions">
          <div className="btn-actions">
            <p className="btn-actions-number">76</p>
            <p className="btn-actions-desc">New candidates to review</p>
            <FaArrowRight size={20} className="btn-actions-icon" />
          </div>
          <div className="btn-actions">
            <p className="btn-actions-number">3</p>
            <p className="btn-actions-desc">Scheduled for today</p>
            <FaArrowRight size={20} className="btn-actions-icon" />
          </div>
          <div className="btn-actions">
            <p className="btn-actions-number">24</p>
            <p className="btn-actions-desc">Messages received</p>
            <FaArrowRight size={20} className="btn-actions-icon" />
          </div>
        </section>

        <section className="section-job-statistics">
          <div className="card-job-stats">
            <div className="card-jobs-stats-header">
             
              <div className="card-jobs-stats-header-tabs">
              
              </div>
            </div>

            <div className="card-jobs-stats-content">
              <div className="card-stats-overview">
            
              </div>

             
            </div>
          </div>

          <div className="card-right-content">
            <div className="card-jobs-open">
              <JobOpening />
            </div>
            <div className="card-applicant-summary">
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