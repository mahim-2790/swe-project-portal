import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userDetail, setUserDetail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    // const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const history = useHistory();

    const auth = getAuth();

    const registerUser = (id, email, password, name, role, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(id, email, name, role, 'POST');
                //save to collections as per role
                saveAsRole(id, name, email, role, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/';
                history.replace('/home');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setUserDetail(data));
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            history.replace('/login');
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (id, email, displayName, role, method) => {
        const user = { id, email, displayName, role };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const saveAsRole = (id, name, email, role, method) => {
        if (role === 'teacher') {
            const newTeacher = { id, name, email, role };
            saveAsTeacher(newTeacher, method);
        }
        else if (role === 'student') {
            const newStudent = { id, name, email, role };
            saveAsStudent(newStudent, method);
        }

    };

    const saveAsTeacher = (newTeacher, method) => {
        fetch('http://localhost:5000/teachers', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTeacher)
        }).then(res => res.json())
    };

    const saveAsStudent = (newStudent, method) => {
        fetch('http://localhost:5000/students', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        }).then(res => res.json())

    };

    return {
        user,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        userDetail
    }
}

export default useFirebase;