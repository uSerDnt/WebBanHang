import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBf2u9qwNUm8kevP_TSGWPAS12KI-hEg38",
  authDomain: "ecommerceapp-5e2a4.firebaseapp.com",
  projectId: "ecommerceapp-5e2a4",
  storageBucket: "ecommerceapp-5e2a4.appspot.com",
  messagingSenderId: "72219724290",
  appId: "1:72219724290:web:9bb91e07cad7592aec351b",
  measurementId: "G-2DXW4WNG72"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)