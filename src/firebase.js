import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAg3xYN8tCT0c5EGNJxjjLQIx2y81lzHEQ",
    authDomain: "nbafull-2d84b.firebaseapp.com",
    databaseURL: "https://nbafull-2d84b.firebaseio.com",
    projectId: "nbafull-2d84b",
    storageBucket: "nbafull-2d84b.appspot.com",
    messagingSenderId: "758479197734",
    appId: "1:758479197734:web:75e5ef3cb695f8ff1678e7"
  };

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}