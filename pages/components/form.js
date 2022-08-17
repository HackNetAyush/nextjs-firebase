import { useState } from 'react';
import styles from './form.module.css';
import { auth } from '../firebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Form() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  let name, value;
  const getUsersData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserDetails({ ...userDetails, [name]: value });
  };

  function signup() {
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        alert('User Created Successful!');
        console.log('User Created Successful!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        alert(error.message);
      });
  }

  return (
    <div className={styles.form_container}>
      <form>
        <div className={styles.form_heading}>Sign Up Form</div>
        <div>
          <input
            className={styles.inputs}
            name="name"
            type="text"
            value={userDetails.name}
            onChange={getUsersData}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div>
          <input
            className={styles.inputs}
            name="email"
            type="email"
            value={userDetails.email}
            onChange={getUsersData}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <input
            className={styles.inputs}
            name="password"
            type="password"
            value={userDetails.passowrd}
            onChange={getUsersData}
            placeholder="Enter your Password"
            required
          />
        </div>
      </form>
      <div>
        <button className={styles.button} onClick={signup} type="submit">
          Create New Account
        </button>
      </div>
    </div>
  );
}
