import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const auth =getAuth(app)

 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading] = useState(null)
    
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
    // ***********LogOut
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)

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
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;