import React from 'react'
import hoteles from "../hoteis.json"
import { useParams } from 'react-router-dom';
import "../css/hotel.css"


const Hotel = () => {

    const params = useParams();
    const hotel = hoteles[params.id]

    return <div>
        <p>nombre: {hotel.name}</p>
        <img src={hotel.img} alt="imagen-hotel" />
        <p>precio: {hotel.daily_price}</p>
        <p>estrellas: {hotel.stars}</p>
    </div>

}

export default Hotel