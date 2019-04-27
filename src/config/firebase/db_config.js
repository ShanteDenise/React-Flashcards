const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const MESSAGING_SENDER_ID = process.env.REACT_APP_MESSAGE_SENDER_ID;


export const DB_CONFIG = {
  
        apiKey: API_KEY,
        authDomain: "react-flashcards-79ee1.firebaseapp.com",
        databaseURL: "https://react-flashcards-79ee1.firebaseio.com",
        projectId: "react-flashcards-79ee1",
        storageBucket: "react-flashcards-79ee1.appspot.com",
        messagingSenderId: MESSAGING_SENDER_ID
    
}