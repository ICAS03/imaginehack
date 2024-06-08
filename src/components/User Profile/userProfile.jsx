import './userProfile.css';
import Navbar from '../Navbar/navbar';
import Navbartop from '../Navbar/navbartop';
import { getAuth } from "firebase/auth";
import { db } from "../../utils/firebase";
import { useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const userProfile = () => {
    const auth = getAuth();
    const userId = auth.currentUser?.uid;
    const collect = collection(db, 'Collection');
    onSnapshot(query(collect, orderBy("id")), (snapshot) => {

   
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
                        <section className="mainDetails">
                            <div className="detail-box">
                                {/* <img className="profile-photo" src="{imageUrls.map((url) => {return <img src={url} />;})}" alt={""}/> */}
                            </div>
                            <div className="details">
                                <h2>{userId}</h2>
                                <h3>Job Title</h3>
                            </div>
                        </section>

                    </main>
                </div>
        </>
    );
  
}

export default userProfile;