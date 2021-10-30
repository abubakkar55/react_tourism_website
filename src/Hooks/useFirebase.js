import { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initFirebase from '../Firebase/FirebaseInit'
const useFirebase = () => {

    initFirebase();


    // firebase data
    const [firebaseData, setFirebaseData] = useState({});
    const [firebaseErrors, setFirebaseErrors] = useState("");


    // lest's Destructure signup or login data 
    const [sName, setSName] = useState("");
    const [sEmail, setSEmail] = useState("");
    const [sPass, setSPass] = useState("");



    const [loading, setLoading] = useState(false);

    // firebase settings
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: sName,
        }).then(() => {

        })
    }

    const registerUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, sEmail, sPass)
            .then(res => {
                updateUser();
                setFirebaseData(res.user);
                alert("you are successfully signed in");
            })
            .catch(error => {
                setFirebaseErrors(error.message)
            }).finally(() => {
                setLoading(false);
            })
            e.target.reset();
        }

    const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, sEmail, sPass)
            .then(res => {
                setFirebaseData(res.user)
            })
            .catch(error => {
                setFirebaseErrors(error.message)
            }).finally(() => {
                setLoading(false);
            })
        e.target.reset();
    }

    // Google sign in 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setFirebaseData(res.user);
            })
            .catch((error) => {
                setFirebaseErrors(error.message);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(res => {
                setFirebaseData({});
            })
    }

    // user observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseData(user);
            } else {
                setFirebaseData({});
            }
        });
    }, []);


    return { googleSignIn, registerUser, firebaseErrors, setSEmail, setSName, setSPass, firebaseData, logOut, loginUser };
}

export default useFirebase;