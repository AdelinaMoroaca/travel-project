import { initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxmotqxxhDNzLQiXTG9fJOzd7Po1Mnj9M",
    authDomain: "travel-a5529.firebaseapp.com",
    projectId: "travel-a5529",
    storageBucket: "travel-a5529.appspot.com",
    messagingSenderId: "160978803706",
    appId: "1:160978803706:web:54e6be3930af1bab82e243",
    measurementId: "G-2W1F7CQFWE"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists()); //checks if there is or not that instance-database

  // if user database doesn't exist -> create/set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(error){
      console.log('error creating the user', error.message);
    }
  }

  // if user data exists
  return userDocRef;
}
  