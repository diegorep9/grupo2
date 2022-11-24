import React from 'react'
import hoteles from "../hoteis.json"
import {Link} from "react-router-dom";

const Home = () => {

    return  <div>
        {hoteles.map((hotel,index)=> <div> <Link to={`/details/${index}`} >{hotel.name}</Link> </div>)}
    </div>
    

  
}

export default Home