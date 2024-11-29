import React, { createContext, useState } from 'react';
import { auth } from './../../Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export let AuthContext = createContext();
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(false);

    let createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    let userInfo = {
        user,
        loading,
        createUser,
        logInUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;