var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyCixjyN1rY4RyBUwqFkgYdEtRmJxYqFlk0",
    authDomain: "ecommerce-site-936f5.firebaseapp.com",
    databaseURL: "https://ecommerce-site-936f5.firebaseio.com",
    projectId: "ecommerce-site-936f5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const dataBase = firebase.firestore;