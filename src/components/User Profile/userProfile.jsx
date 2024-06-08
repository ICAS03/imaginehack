import './userProfile.css';
import Navbar from '../Navbar/navbar';
import Navbartop from '../Navbar/navbartop';
import { getAuth } from "firebase/auth";
import { db } from "../../utils/firebase";
import {  doc, updateDoc } from "firebase/firestore";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";




const userProfile = () => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;

    const docRef = doc(db, "Collection", userId);
    updateDoc(docRef, {
      //capital: true
    });


    return (
        <>
            <Navbar/>
                <div className="page-contents">
            <Navbartop />
                    <div className="greeting">
                        <p className="greeting-title">Applicant Details</p>
                    </div>
                    <main>
                        <div className='all'>
                        <div className='mainSection'>
                            <div className='leftSections'>
                                <section className="mainDetails1">
                                    <div className="upProfile">
                                        <div className="detail-box">
                                            {/* <img className="profile-photo" src="{imageUrls.map((url) => {return <img src={url} />;})}" alt={""}/> */}
                                        </div>
                                        <div className="details">
                                            <h2>{userId}</h2>
                                            <h3>Job Title</h3>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="downProfile">
                                        <div className="appliedJobs">
                                            <h2>Applied Jobs</h2>
                                            <br></br>
                                            <h4>1. {userId}</h4>
                                            <br></br>
                                            <h4>2. {userId}</h4>
                                        </div>
                                        <br></br>
                                        <hr></hr>
                                        <br></br>
                                        <div className='contacts'>
                                            <h2>Contacts</h2>
                                            <div className="icon-flex">
                                                <div className='icon1'>
                                                    <AiOutlineMail size={20}/>
                                                </div>
                                                <div className='email'>
                                                    <h3 className="icon-title">Email</h3>
                                                    <p className="icon-desc">{userId}</p>
                                                </div>
                                            </div>
                                            <div className='icon-flex'>
                                                <div className='icon2'>
                                                    <BsPhone size={20}/>
                                                </div>
                                                <div className='number'>
                                                    <h3 className="icon-title">Phone Number</h3>
                                                    <p className="icon-desc">{userId}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <br></br>
                                <section className="mainDetails2">
                                    <h2>Executive Summary</h2>
                                    <div className='summary1'>
                                        <p>{userId}</p>                                        
                                    </div>
                                </section>
                                <br></br>
                                <section className="mainDetails2">
                                    <h2>Admin Feedback</h2>
                                    <div className='admin-summary'>
                                        <textarea className="admin-textbox"></textarea>
                                        <button className='admin-btn'>Submit</button>
                                    </div>
                                </section>

                            </div>
                            <div className='rightSections'>
                                <section className="artificialIntelligence">
                                    <h2>AI-Generated Grading</h2>
                                    <br></br>
                                    <div className='cards'>
                                        <div className='card1 cardItem'>
                                            <h2>Experience</h2>
                                            <p>7/10</p>
                                        </div>
                                        <div className='card2 cardItem'>
                                            <h2>Competency</h2>
                                            <p>2/10</p>
                                        </div>
                                        <div className='card3 cardItem'>
                                            <h2>Value Fit</h2>
                                            <p>5/10</p>
                                        </div>
                                    </div>
                                    <div className='result'>
                                        <br></br>
                                        <br></br>
                                        <h3>Suggested Result:</h3>
                                        <div className='result1'>
                                            <p>{userId}</p>
                                        </div>
                                    </div>
                                </section>
                                <br></br>
                                <section className='interview'>
                                    <h2>Summary of Interview</h2>
                                    <div className='summary2'>
                                        <p>{userId}</p>
                                    </div>
                                </section>
                                <br></br>
                                <section className='resume'>
                                    <h2>Resume/ CV Summary</h2>
                                    <div className='summary2'>
                                        <p>{userId}</p>
                                        <p></p>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='buttons'>
                                <div className='button1'>
                                    <button className='btn'>PASS</button>
                                </div>
                                <div className='button2'>
                                    <button className='btn'>KIV</button>
                                </div>
                                <div className='button3'>
                                    <button className='btn'>REJECT</button>
                                </div>
                            </div>
                        </div>
                        <br></br>
                    </main>
                </div>
        </>
    );
  
}

export default userProfile;