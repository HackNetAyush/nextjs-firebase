import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyA1qcQwyE9m9O5iU-HzkZMyBH9RZfnmA24',
  authDomain: 'itsme-id.firebaseapp.com',
  databaseURL: 'https://itsme-id-default-rtdb.firebaseio.com/',
  projectId: 'itsme-id',
  storageBucket: 'itsme-id.appspot.com',
  messagingSenderId: '221797338476',
  appId: '1:221797338476:web:5c0eccfd95c7d1018c7749',
  measurementId: 'G-7NZNKQE24G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// export const auth;
export default app;
