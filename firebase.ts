import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6vZRqknEuB4Fg3j6dxD_x_CaKHt5V4A",
  authDomain: "chatgpt-messenger-yt-683c5.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-683c5",
  storageBucket: "chatgpt-messenger-yt-683c5.appspot.com",
  messagingSenderId: "731169322904",
  appId: "1:731169322904:web:006967ae3d1cc394a61ded"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }