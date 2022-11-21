import React,{useState} from "react";
import "./Ratingdashboard.css";
import ReactStars from "react-rating-stars-component";

const Ratingdashboard = () => {
    const [rate, setRate] = useState(0);
    return (
        <>
        <ReactStars
    count={5}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
    
    </>
    )

}

export default Ratingdashboard;

