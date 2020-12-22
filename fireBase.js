import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDnzQ5dpoOq_8Kqjxl9SnY_F6lsqnwevm8",
    authDomain: "chat-react-redux-socket.firebaseapp.com",
    projectId: "chat-react-redux-socket",
    storageBucket: "chat-react-redux-socket.appspot.com",
    messagingSenderId: "997821206642",
    appId: "1:997821206642:web:e25b252ace281d309b32eb"
};

const db = firebase.initializeApp(firebaseConfig);

export default db.firestore()