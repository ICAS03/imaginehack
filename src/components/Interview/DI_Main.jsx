import React from "react";
import "/src/components/Interview/DI_Main.css";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/navbar";

const DI_Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="di-mainClass">
        <div className="di-greeting">
          <p className="di-greeting-title">Digital Interview</p>
          <p className="di-greeting-desc">
            The digital interview will start once the play button is pressed
          </p>
          <p className="di-greeting-desc">
            The total time for this interview is 2 minutes 30 seconds (30 sec
            for each question)
          </p>
        </div>
        <hr className="di-hline"></hr>
        <section className="di-job">
          <div>
            <p className="di-title">Job Application :</p>
            <p className="di-desc">CyberSecurity Architect</p>
          </div>
        </section>
        <section className="di-interview-details">
          <div>
            <p className="di-title">Interview Details :</p>
            <p className="di-desc">
              Welcome to the digital interview portion of our application
              process. Below, you will find a set of questions designed to help
              us get <br /> to know you better. Please take your time to
              consider each questions thoughtfully before providing your
              response
            </p>
            <div className="di-interview-details-indent">
              <p className="di-title2">
                <span className="di-bold-span">• Duration:</span> 45-60 minutes
              </p>
              <p className="di-title2">
                <span className="di-bold-span">• Questions:</span> 20 questions (10
                behavioural, 5 technical, and 5 written questions)
              </p>
            </div>
          </div>
        </section>
        <section className="di-interview-instructions">
          <div>
            <p className="di-title">Interview Instructions :</p>
            <span>&#10003;</span>
            <span className="di-points">Read each question carefully</span>
            <br />
            <span>&#10003;</span>
            <span className="di-points">
              Dress professionally to make a good first impression.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="di-points">
              Keep your responses concise and foccused.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="di-points">
              Ensure your microphone, web camera, and Internet connection is
              working.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="di-points">
              Ensure your environment is quiet and well-lit for optimal
              recording quality.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="di-points">
              You may have a limited time to respond to each question, so manage
              your time effectively.
            </span>
            <br />
          </div>
        </section>
        <hr className="di-hline"></hr>
        <button className="di-interview-button" onClick={() => navigate("/interview")}>Start Digital Interview</button> 
        <section className="di-section-btn-actions">
        </section>
      </main>
    </>
  );
};

export default DI_Main;
