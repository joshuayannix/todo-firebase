import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIxeEA4yibo6lLy6RlD5BqUFFvdu8m5I0",
  authDomain: "todo-app-34a5e.firebaseapp.com",
  databaseURL: "https://todo-app-34a5e.firebaseio.com",
  projectId: "todo-app-34a5e",
  storageBucket: "todo-app-34a5e.appspot.com",
  messagingSenderId: "1012013875402",
  appId: "1:1012013875402:web:ba6d405d3d5b1c53a3f433",
  measurementId: "G-9DJDNH9H7R"
})

const db = firebaseApp.firestore();

export default db;