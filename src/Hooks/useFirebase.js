import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import app from './../Firebase/Firebase.init';



const useFirebase = () => {

    const[user,setUser] = useState({});
    const[error,setError] = useState('');

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
        })
    },[])

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user = result.user;
            setUser(user);
            console.log(user);
        }).catch((error)=>{
            setError(error.message);
        })
    }
    const handleSignOut =() =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .catch((error)=>{
            setUser({});
        });
        console.log('signOut',user);
    }



    return {
        handleGoogleSignIn,
        error,
        user,
        handleSignOut
    }
};

export default useFirebase;