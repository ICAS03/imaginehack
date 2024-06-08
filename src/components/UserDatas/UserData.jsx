import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar';
import Navbartop from '../Navbar/navbartop';
import { FaArrowRight } from "react-icons/fa";

import { db } from '../../utils/firebase';

import UserDataTable from './UserDataTable.jsx'
import { getFirestore, doc, onSnapshot, collection } from 'firebase/firestore';

function UserData() {
    const [userData, setUserData] = useState([]);
    const firestore = getFirestore();
    const db = collection(firestore, 'Collection');

    useEffect(() => {
        onSnapshot(db, (snapshot) => {
            const records = snapshot.docs.map(doc => doc.data());
            setUserData(records);
        })

    }, []);

    if (!userData){
        return <div>Loading...</div>
    }
    console.log(userData);
    return (
        <UserDataTable userData={userData} />
      );
} 

export default UserData;