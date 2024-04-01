import { initializeApp } from 'firebase/app';
import{getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import{getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQLO-padWQ86aYlUk85PilOt3pHa-NcWw",
    authDomain: "crossplatformapplication-57541.firebaseapp.com",
    projectId: "crossplatformapplication-57541",
    storageBucket: "crossplatformapplication-57541.appspot.com",
    messagingSenderId: "37364270073",
    appId: "1:37364270073:web:1fe966b2b735e46b7bb328"
  };
 const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export{db,app,auth};