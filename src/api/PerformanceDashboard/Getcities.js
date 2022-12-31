
import axios from "axios";

const Getcities = async (list) => {
    const res = await axios.get(process.env.REACT_APP_BACKEND_URL+"/api/citieslist/"+list );
    return res;
}

export default Getcities;