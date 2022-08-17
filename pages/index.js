import Head from 'next/head';
import Form from './components/form.js';
import styles from '../styles/index.module.css';
import { auth } from './firebase.js';

export default function Home() {
  return (
    <div className={styles.root}>
      <Form />
    </div>
  );
}
