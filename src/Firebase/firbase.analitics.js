import initializeFirebase from "./firebase.init";
import { getAnalytics } from "firebase/analytics";

const initializeAnalytics = () => {
    const app = initializeFirebase();
    getAnalytics(app);
};
export default initializeAnalytics;