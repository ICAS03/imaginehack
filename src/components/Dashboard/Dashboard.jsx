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
            <div className="ad-card-jobs-stats-header">
             
              <div className="ad-card-jobs-stats-header-tabs">
              
              </div>
            </div>

            <div className="ad-card-jobs-stats-content">
              <div className="ad-card-stats-overview">
            
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