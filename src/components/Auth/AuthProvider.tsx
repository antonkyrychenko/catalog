import React, { useState, useEffect, FC } from "react";
import app from "../../config/firebase";

export const AuthContext = React.createContext(app.auth().currentUser);

export const AuthProvider: FC = (props) => {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState(app.auth().currentUser);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false)
        });
    }, [])

    if (pending) {
        return <></>
    }

    return (
        <AuthContext.Provider
            value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}
