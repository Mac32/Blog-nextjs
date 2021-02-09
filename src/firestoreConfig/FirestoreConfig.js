import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  databaseURL: process.env.DATA_BASE_URL,
  projectId: "mi-blog-personal-28407",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

//if(firebase.firestore().length){

  let db = firebase.firestore();
  //db.settings({ timestampsInSnapshots: true });
//}

export default db;
