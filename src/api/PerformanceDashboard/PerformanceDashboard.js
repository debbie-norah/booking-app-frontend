import axios from "axios";

const PerformanceDashboard = async () => {
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL+"/performanceDashboard" );
    
    return res;
}

export default PerformanceDashboard;



