
import axios from "axios";

const Getexperiences = async (list) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL+"/api/experienceslist/"+list );
   
    return res;
}

export default Getexperiences;