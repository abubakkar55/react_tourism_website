import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initFirebase from '../Firebase/FirebaseInit'
const useFirebase = () => {

    initFirebase();


    // firebase data
    const [firebaseData, setFirebaseData] = useState({});
    const [firebaseErrors, setFirebaseErrors] = useState("");
    const [loading, setLoading] = useState(true);


    // lest's Destructure signup or login data 
    const [sName, setSName] = useState("");
    const [sEmail, setSEmail] = useState("");
    const [sPass, setSPass] = useState("");



    // firebase settings
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: sName,
        }).then(() => {

        })
    }

    const registerUser = () => {
        return createUserWithEmailAndPassword(auth, sEmail, sPass);
    }

    const loginUser = (e) => {
        setLoading(true);
        e.preventDefault();
        return signInWithEmailAndPassword(auth, sEmail, sPass)
    }

    // Google sign in 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(res => {
                setFirebaseData({});
            })
            .finally(() => {
                setLoading(false);
            });
    }

    // user observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseData(user);
            } else {
                setFirebaseData({});
            }
            setLoading(false)
        });
    }, []);


    return { googleSignIn, registerUser, firebaseErrors, setSEmail, setSName, setSPass, firebaseData, logOut, loginUser, setFirebaseErrors, setFirebaseData, setLoading, loading, updateUser };
}

export default useFirebase;