import React from "react";
import "/src/components/Interview/DI_Main.css";

const DI_Main = () => {
  return (
    <>
      <main className="mainClass">
        <div className="greeting">
          <p className="greeting-title">Digital Interview</p>
          <p className="greeting-desc">
            The digital interview will start once the play button is pressed
          </p>
          <p className="greeting-desc">
            The total time for this interview is 2 minutes 30 seconds (30 sec
            for each question)
          </p>
        </div>
        <section className="job">
          <div>
            <p className="title">Job Application :</p>
            <p className="desc">CyberSecurity Architect</p>
          </div>
        </section>
        <section className="interview-details">
          <div>
            <p className="title">Interview Details :</p>
            <p className="desc">
              Welcome to the digital interview portion of our application
              process. Below, you will find a set of questions designed to help
              us get <br /> to know you better. Please take your time to
              consider each questions thoughtfully before providing your
              response
            </p>
            <div className="interview-details-indent">
              <p className="title2">
                <span className="bold-span">• Duration:</span> 45-60 minutes
              </p>
              <p className="title2">
                <span className="bold-span">• Questions:</span> 20 questions (10
                behavioural, 5 technical, and 5 written questions)
              </p>
            </div>
          </div>
        </section>
        <section className="interview-instructions">
          <div>
            <p className="title">Interview Instructions :</p>
            <span>&#10003;</span>
            <span className="points">Read each question carefully</span>
            <br />
            <span>&#10003;</span>
            <span className="points">
              Dress professionally to make a good first impression.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="points">
              Keep your responses concise and foccused.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="points">
              Ensure your microphone, web camera, and Internet connection is
              working.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="points">
              Ensure your environment is quiet and well-lit for optimal
              recording quality.
            </span>
            <br />
            <span>&#10003;</span>
            <span className="points">
              You may have a limited time to respond to each question, so manage
              your time effectively.
            </span>
            <br />
          </div>
        </section>
        <hr className="hline"></hr>
        <button className="interview-button">Start Digital Interview</button>
        <section className="section-btn-actions">
          <div className="text-display-div">
            <p className="text-display">Text Display</p>
          </div>
        </section>

        <section className="section-job-statistics">
          <div className="btn-section"></div>
        </section>
        <section>
          <div className="timer-div">
            <p className="timer-text">Time remaining for question : </p>
          </div>
        </section>
        <section>
          <div className="timer-div">
            <p className="timer-text">Text: </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default DI_Main;