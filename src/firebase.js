import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Redirect } from "react-router";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "./config";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log("users====", user);
    try {
      const userQuery = query(
        collection(db, "users"),
        where("uid", "==", user.uid)
      );
      const querySnapshot = await getDocs(userQuery);
      console.log("userquery", querySnapshot);
      if (querySnapshot.docs.length === 0) {
        const userRef = await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
        console.log("Document written with ID: ", userRef.id);
      }
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });

      console.log(userQuery);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    <Redirect to="/" />;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithGithub = async () => {
  try {
    const res = await signInWithPopup(auth, githubProvider);
    const credential = GithubAuthProvider.credentialFromResult(res);
    const token = credential.accessToken;
    const user = res.user;
    console.log("users====", user);
    try {
      const userQuery = query(
        collection(db, "users"),
        where("uid", "==", user.uid)
      );
      const querySnapshot = await getDocs(userQuery);
      console.log("userquery", querySnapshot);
      if (querySnapshot.docs.length === 0) {
        const userRef = await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "github",
          email: user.email,
        });
        console.log("Document written with ID: ", userRef.id);
      }
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });

      console.log(userQuery);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    <Redirect to="/" />;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signInWithGoogle, signInWithGithub, logout };
