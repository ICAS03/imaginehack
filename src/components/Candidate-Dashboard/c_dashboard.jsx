import React from "react";
import "/src/components/Candidate-Dashboard/c_dashboard.css";
import Navbar from "../Navbar/navbar";
import Navbartop from "../Navbar/navbartop";

const c_dashboard = () => {
  return (
    <>
      <main className="mainClass">
        <Navbar />
        <Navbartop />
        <div className="greeting">
          <p className="title">Good morning, Jake</p>
          <p className="desc">
            Here's what's happening with your job search applications
          </p>
        </div>
        <section className="job">
          <div className="job-card-div">
            <p className="job-title">Total Jobs Applied</p>
            <p className="job-stats">5</p>
          </div>
          <div className="job-card-div">
            <p className="job-title">Interviewed</p>
            <p className="job-stats">5</p>
          </div>
          <div className="job-card-div">
            <p className="job-title">Shortlisted</p>
            <p className="job-stats">1</p>
          </div>
        </section>
        <section>
          <div className="recent-applications-history">
            <p className="recent-applications-history-title">
              Recent Applications History
            </p>
            <div className="recent-applications-history-card1">
              <img
                src="./src/assets/job.png"
                className="application-icon"
              ></img>
              <p className="position-title">Social Media Assistant</p>
              <p className="date-applied">24 April 2024</p>
              <button className="status-btn-ir">In Review</button>
            </div>
            <div className="recent-applications-history-card2">
              <img
                src="./src/assets/job.png"
                className="application-icon"
              ></img>
              <p className="position-title">Business Analyst</p>
              <p className="date-applied">23 April 2024</p>
              <button className="status-btn-s">Shortlisted</button>
            </div>
            <div className="recent-applications-history-card1">
              <img
                src="./src/assets/job.png"
                className="application-icon"
              ></img>
              <p className="position-title">Graphic Designer</p>
              <p className="date-applied">12 April 2024</p>
              <button className="status-btn-d">Declined</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default c_dashboard;
