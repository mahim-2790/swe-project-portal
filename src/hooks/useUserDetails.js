import { useContext } from "react";
import { UserDetailContext } from "../contexts/UserDetailProvider/UserDetailProvider";


const useUserDetails = () => {
    const details = useContext(UserDetailContext);
    return details;
};

export default useUserDetails;