import React, { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { db } from "../../utils/firebase";
import {
  getFirestore,
  doc,
  collection,
  onSnapshot,
  query,
  orderBy,
  getDocs,
  getDoc,
} from "firebase/firestore";
import "./userProfile2.css";
import Navbar from "../Navbar/navbar";
import Navbartop from "../Navbar/navbartop";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useLocation } from "react-router";

const userProfile = () => {
  //const [userData, setUserData] = useState([]);
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [text, setText] = useState("");
  //const userId = auth.currentUser?.uid;
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const location = useLocation();
  const { user } = location.state;

  const generationConfig = {
    temperature: 0.5,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  //prompt engineering//
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction:
      "You will be evaluating they would be suitable for" +
      document.querySelector("#position1") +
      "and" +
      document.querySelector("#position2") +
      "job positions based on their experience in a paragraph of 80 words without symbols. You will evaluate them strictly based on their job requirements",
  });

  async function generateSummary() {
    try {
      const chatSession = model.startChat({
        generationConfig,
      });

      const result = await chatSession.sendMessage(
        user.summary + user.interview
      );

      const finaltext = result.response.text();
      console.log(finaltext);
      setData(finaltext);
    } catch (error) {
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  useEffect(() => {
    generateSummary();
  }, []);
  //{userData.name}
  return (
    <>
      <Navbar />
      <div className="page-contents">
        <Navbartop />
        <div className="greeting">
          <p className="greeting-title">Applicant Details</p>
        </div>
        <main>
          <div className="all">
            <div className="mainSection">
              <div className="leftSections">
                <section className="mainDetails1">
                  <div className="upProfile">
                    <div className="detail-box">
                      {/* <img className="profile-photo" src="{imageUrls.map((url) => {return <img src={url} />;})}" alt={""}/> */}
                    </div>
                    <div className="details">
                      <h2>{user.name}</h2>
                      <h3>{user.ID}</h3>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="downProfile">
                    <div className="appliedJobs">
                      <h2>Applied Jobs</h2>
                      <br></br>
                      <h4 id="position1">1. {user.position1}</h4>
                      <br></br>
                      <h4 id="position2">2. {user.position2}</h4>
                    </div>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="contacts">
                      <h2>Contacts</h2>
                      <div className="icon-flex">
                        <div className="icon1">
                          <AiOutlineMail size={20} />
                        </div>
                        <div className="email">
                          <h3 className="icon-title">Email</h3>
                          <p className="icon-desc">{user.email}</p>
                        </div>
                      </div>
                      <div className="icon-flex">
                        <div className="icon2">
                          <BsPhone size={20} />
                        </div>
                        <div className="number">
                          <h3 className="icon-title">Phone Number</h3>
                          <p className="icon-desc">{user.contact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <br></br>
                <section className="mainDetails2">
                  <h2>Executive Summary</h2>
                  <div className="summary1">
                    <p>{data}</p>
                  </div>
                </section>
                <br></br>
                <section className="mainDetails2">
                  <h2>Admin Feedback</h2>
                  <div className="admin-summary">
                    <textarea className="admin-textbox"></textarea>
                    <button className="admin-btn">Submit</button>
                  </div>
                </section>
              </div>
              <div className="rightSections">
                <section className="artificialIntelligence">
                  <h2>AI-Generated Grading</h2>
                  <br></br>
                  <div className="cards">
                    <div className="card1 cardItem">
                      <h2>Experience</h2>
                      <p>7/10</p>
                    </div>
                    <div className="card2 cardItem">
                      <h2>Competency</h2>
                      <p>2/10</p>
                    </div>
                    <div className="card3 cardItem">
                      <h2>Value Fit</h2>
                      <p>5/10</p>
                    </div>
                  </div>
                  <div className="result">
                    <br></br>
                    <br></br>
                    <h3>Suggested Result:</h3>
                    <div className="result1">
                      <p>{data2}</p>
                    </div>
                  </div>
                </section>
                <br></br>
                <section className="interview">
                  <h2>Summary of Interview</h2>
                  <div className="summary2">
                    <p>{user.interview}</p>
                  </div>
                </section>
                <br></br>
                <section className="resume">
                  <h2>Resume/ CV Summary</h2>
                  <div className="summary2">
                    <p>{user.summary}</p>
                    <p></p>
                  </div>
                </section>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="buttons">
              <div className="button1">
                <button className="btn">PASS</button>
              </div>
              <div className="button2">
                <button className="btn">KIV</button>
              </div>
              <div className="button3">
                <button className="btn">REJECT</button>
              </div>
            </div>
          </div>
          <br></br>
        </main>
      </div>
    </>
  );
};

export default userProfile;
