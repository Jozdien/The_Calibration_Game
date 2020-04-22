import Firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC55BCeHpBPTnCTA5HJ2iRKKdjGrEaCjSU",
  authDomain: "the-calibration-game.firebaseapp.com",
  databaseURL: "https://the-calibration-game.firebaseio.com",
  projectId: "the-calibration-game",
  storageBucket: "the-calibration-game.appspot.com",
  messagingSenderId: "987707233313",
  appId: "1:987707233313:web:a820b6c72bcfa8ee39bf60"
};
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();