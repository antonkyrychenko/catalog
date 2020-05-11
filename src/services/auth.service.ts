import app from "../config/firebase"
import { UserCredentials } from "../models/user-credentials"

export const signUp = (userCredentials: UserCredentials) => {
    return app.auth().createUserWithEmailAndPassword(userCredentials.email, userCredentials.password);
}

export const signIn = (userCredentials: UserCredentials) => {
    return app.auth().signInWithEmailAndPassword(userCredentials.email, userCredentials.password);
}

export const signOut = () => {
    return app.auth().signOut();
}