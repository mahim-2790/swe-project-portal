import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [teacher, setTeacher] = useState(false);
    const [token, setToken] = useState('');
    const [userDetail, setUserDetail] = useState({});


    const auth = getAuth();

    const registerUser = (id, email, password, name, role, teacherInitial, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(id, email, name, role, 'POST');
                //save to collections as per role
                saveAsRole(id, name, email, role, teacherInitial, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                if (role === 'teacher') {
                    history.replace('/teacher/home');
                }
                else history.replace('/home');
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
                if (userDetail.role === 'teacher') {
                    history.replace('/teacher/home');

                }
                else history.replace('/home');
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



    const logout = (history) => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            history.push('/login');
            sessionStorage.clear();
            setUser({});
            setUserDetail({});
        }).catch((error) => {
            // An error happened.
            console.log(error);

        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (id, email, displayName, role, method) => {
        const user = { id, email, displayName, role };
        fetch('https://secure-ravine-11487.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const saveAsRole = (id, name, email, role, teacherInitial, method) => {
        if (role === 'teacher') {
            const newTeacher = { id, name, email, role, teacherInitial };
            saveAsTeacher(newTeacher, method);
        }
        else if (role === 'student') {
            const newStudent = { id, name, email, role };
            saveAsStudent(newStudent, method);
        }

    };

    const saveAsTeacher = (newTeacher, method) => {
        fetch('https://secure-ravine-11487.herokuapp.com/teachers', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTeacher)
        }).then(res => res.json())
    };

    const saveAsStudent = (newStudent, method) => {
        fetch('https://secure-ravine-11487.herokuapp.com/students', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        }).then(res => res.json())

    };

    useEffect(() => {
        async function fetchUserDetail() {
            let res = await fetch(`https://secure-ravine-11487.herokuapp.com/users/${user.email}`);
            let data = await res.json();
            setUserDetail(data);
            if (data?.role === 'teacher') {
                setTeacher(true);
            }
            sessionStorage.setItem('user', JSON.stringify(data));
        }
        fetchUserDetail();
    }, [user.email]);




    return {
        user,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        userDetail,
        teacher
    }
}

export default useFirebase;