import firebase from "firebase/app"
import "firebase/firestore"


const db = ({db}) => {
return db
}

export async function getStaticProps() {

  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    databaseURL: process.env.DATA_BASE_URL,
    projectId: process.env.PROJECT_ID,
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


  let db = firebase.firestore();

  return {
    props: {
    	db,
    }
  }

}

export default db;
