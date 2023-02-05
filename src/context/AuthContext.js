import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { Link,  useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();
// const navigate = useNavigate();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const onLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    
    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{onLogin, user, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};