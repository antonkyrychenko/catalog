import * as firebase from 'firebase'
import "firebase/auth";
import { firebaseConfig } from '../config/keys';

const app = firebase.initializeApp(firebaseConfig);

export default app; 