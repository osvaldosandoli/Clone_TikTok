import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyABRrLWvfX6E0r9dMbOEZkte-pMBGRE6Y4",
  authDomain: "clone---tiktok-76e37.firebaseapp.com",
  projectId: "clone---tiktok-76e37",
  storageBucket: "clone---tiktok-76e37.appspot.com",
  messagingSenderId: "694944416783",
  appId: "1:694944416783:web:05b5f5001222f6aaa24f7a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;