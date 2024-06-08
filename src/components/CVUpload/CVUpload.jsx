import "../CVUpload/CVUpload.css";
import { useState, useEffect } from "react";
import { db, storage } from "../../utils/firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import pdfToText from 'react-pdftotext';
import { GoogleGenerativeAI } from "@google/generative-ai";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { v4 } from "uuid";
import Navbar from "../Navbar/navbar";

function CVUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [pdfUpload, setImageUpload2] = useState(null);

  const [imageUrls, setImageUrls] = useState([]);

  const auth = getAuth();
  const userId = auth.currentUser?.uid;
 
  
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
      alert("Submission received!");
    });
  };

  const uploadFile2 = () => {
    if (pdfUpload == null) return;
    const imageRef2 = ref(storage, `resumes/${pdfUpload.name + v4()}`);
    uploadBytes(imageRef2, pdfUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const [newName, setNewName] = useState("");
  const [newID, setNewID] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newPosition1, setNewPosition1] = useState("");
  const [newPosition2, setNewPosition2] = useState("");
  const [newCV, setNewCV] = useState("");
  const [newAdmin, setNewAdmin] = useState("");
  const [newGrading, setNewGrading] = useState("");
  const [newInterview, setNewInterview] = useState("");
  const [newResult, setNewResult] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [test , setTest] = useState("");

  const usersCollectionRef = collection(db, 'Collection');
  const userDocRef = doc(usersCollectionRef, userId);

  /*const createUser = async () => {
    await setDoc(userDocRef, {
      name: newName,
      ID: newID,
      email: newEmail,
      contact: newContact,
      position1: newPosition1,
      position2: newPosition2,
      CV: newCV, 
      admin: newAdmin,
      grading: newGrading,
      interview: newInterview,
      result: newResult,
      summmary: newSummary,
    });
  };*/

  function extractText(event) {
    const file = event.target.files[0]
    pdfToText(file)
        .then(text => {
            //Summariser(text);
            setTest(text);
          
  })
        .catch(error => console.error("Failed to extract text from pdf"))

}

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const [loading, setLoading] = useState(false);

  async function Summariser(test) {
    try { 
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-pro",
        systemInstruction: "Your task is to summarize the resume of the candidate that I am about to give you. Analyze the document, and detect the name, telephone number, email, list of experience and skills. Respond strictly with the fields in a numbered list, and nothing else—no explanations, no additional text.",  });
        
      const result = await model.generateContent(test);
      const final_text = result.response.text();
      setLoading(false);
      console.log("Summariser:" + final_text)

      //setNewSummary(final_text);
      const usersCollectionRef = collection(db, 'Collection');
      const userDocRef = doc(usersCollectionRef, userId);

        // Save final_text to Firestore
        await setDoc(userDocRef, {
            name: newName,
            ID: newID,
            email: newEmail,
            contact: newContact,
            position1: newPosition1,
            position2: newPosition2,
            CV: newCV, 
            admin: newAdmin,
            grading: newGrading,
            interview: newInterview,
            result: newResult,
            summary: final_text, // Change newSummary to final_text
        });

      console.log("After cvvvvv:" + final_text);
    } catch (error) {
      setLoading(false);
      console.error("Summariser error: ", error);
    }
  }

  return (
    <>
      <Navbar />
      <h1>Job Application Submission</h1>
      <br></br>
      <div className="fullContent">
        
        <div className="cv-title">
          <div className="flex candidate-section">
            <h2>Candidate Profile Picture</h2>
            <h3 className="cand-desc">This image will be displayed on your public profile.</h3>
          </div>
          <div className="div-upload">
            <input
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            {/* <img className="profile-photo" src="{imageUrls.map((url) => {return <img src={url} />;})}" alt={""}/> */}
          </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="title2">
          <div className="applicant">
            <h2>Applicant Details</h2>
            <h3 className="cand-desc">Introduce yourself by filling up your basic information.</h3>
          </div>
          <div className="form">
            <h2>
              Full Name <span className="stars">*</span>
            </h2>
            <input
              type="text"
              placeholder="Ali bin Ahmad"
              name="fname"
              id="answer"
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            ></input>
            <br></br>
            <br></br>
            <h2>
              Identification Number (Or Passport Number){" "}
              <span className="stars">*</span>
            </h2>
            <input
              type="text"
              placeholder="901017100982"
              name="IC"
              onChange={(event) => {
                setNewID(event.target.value);
              }}
            ></input>
            <br></br>
            <br></br>
            <h2>
              Email Address <span className="stars">*</span>
            </h2>
            <input
              type="text"
              placeholder="ali123@gmail.com"
              name="email"
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
            ></input>
            <br></br>
            <br></br>
            <h2>
              Contact Number <span className="stars">*</span>
            </h2>
            <input
              type="text"
              placeholder="+60182938475"
              name="number"
              onChange={(event) => {
                setNewContact(event.target.value);
              }}
            ></input>
            <br></br>
            <br></br>
            <div className="dropdown">
              <div className="drop1">
                <h2>
                  Applied Position <span className="stars">*</span>
                </h2>
                <select
                  onChange={(event) => {
                    setNewPosition1(event.target.value), setNewCV(""), setNewAdmin(""), setNewGrading(""), setNewInterview(""), setNewResult(""), setNewSummary("");
                  }}
                >
                  <option>Select an option</option>
                  <option>Cyber Security Architect</option>
                  <option>IT Project Manager</option>
                  <option>Cloud Engineer</option>
                  <option>Software Developer</option>
                </select>
              </div>
              <div className="drop">
                <h2>Second Applied Position</h2>
                <select
                  onChange={(event) => {
                    setNewPosition2(event.target.value);
                  }}
                >
                  <option>Select an option</option>
                  <option>Cyber Security Architect</option>
                  <option>IT Project Manager</option>
                  <option>Cloud Engineer</option>
                  <option>Software Developer</option>
                </select>
              </div>
            </div>
            <br></br>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="title3">
          <div className="flex">
            <h2>Resume Submission</h2>
            <h3 className="cand-desc">Kindly upload your latest resume here.</h3>
          </div>
          <div className="div-upload">
            <input
              type="file"
              onChange={(event) => {
                setImageUpload2(event.target.files[0]);
                extractText(event);
              }}
            />
          </div>
          <br></br>
          <br></br>
        </div>
        <div className="submit">
          <button
            name="submit"
            onClick={() => {
              Summariser(test);
             // createUser();
              uploadFile();
              uploadFile2();
            }}
          >
            Submit
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
export default CVUpload;