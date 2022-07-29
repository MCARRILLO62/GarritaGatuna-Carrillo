import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpSVg6rcCTlr4nSs-ydjND8sJSGGrJOP8",
  authDomain: "garrita-gatuna-eshop.firebaseapp.com",
  projectId: "garrita-gatuna-eshop",
  storageBucket: "garrita-gatuna-eshop.appspot.com",
  messagingSenderId: "1023014021029",
  appId: "1:1023014021029:web:04d9cf076a3ec200412a4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
