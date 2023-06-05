import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const auth =getAuth(app)

 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading] = useState(null)

    const googlepPovider = new GoogleAuthProvider();
    
//    ********** Regster
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // **********Signin
    const signin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sing in with google 

    const googleSingin =()=>{
        setLoading(true)
        return signInWithPopup( auth,googlepPovider)
    }


    // ***********LogOut
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUser =(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name , photoURL: photo
         })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser =>{
            setUser(currentuser);
            console.log(currentuser);
            setLoading(false)
        })
        return()=>{
            return  unsubscribe()
        }

    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        signin,
        googleSingin,
        logOut,
        updateUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;