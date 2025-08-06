import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA5KpWYIAS6vI6PLv8whFBYCYMGtP-zGfQ",
  authDomain: "netflix-clone-5ee1d.firebaseapp.com",
  projectId: "netflix-clone-5ee1d",
  storageBucket: "netflix-clone-5ee1d.firebasestorage.app",
  messagingSenderId: "733290216408",
  appId: "1:733290216408:web:d13906f6f0d022e3e110ad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      EmailAuthProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logOut = async () => {
  await signOut(auth);
};

export { auth, db, login, signUp, logOut };
