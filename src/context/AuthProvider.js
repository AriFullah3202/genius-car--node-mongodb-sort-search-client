import React, { createContext, useState, useEffect } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, } from 'firebase/auth';
import { setUserLogHandler } from '@firebase/logger';


/* component er nam AuthProvider 
1. eti ekta parameter nibe jaita sob component er moddhe asbe
2. ei component er upore ekta context create korte hbe
3. jodi auth use korte chai tahole firebase theke getAuth ta create korte hbe 
4. return er moddhe authContext ta sob jaygay use korbe se jonne provider dite hocche
*/

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoding] = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        // eita kali kore de
        return () => {
            return unsubscribe()
        }
    }, [])



    const authInfo = {
        createUser,
        user,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
