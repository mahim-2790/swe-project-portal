import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useDetails = () => {
    const [userDetail, setUserDetail] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        async function fetchUserDetail() {
            let res = await fetch(`http://localhost:5000/users/${user.email}`);
            let data = await res.json();
            setUserDetail(data);
        }
        fetchUserDetail();
    }, [user.email]);
    console.log('user detail', userDetail);

    return {
        userDetail
    };
};

export default useDetails;