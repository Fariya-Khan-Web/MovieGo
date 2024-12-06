import React, { createContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
import app from '../../Firebase/firebase.init';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    


    const auth = getAuth(app);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser,
        loginUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;