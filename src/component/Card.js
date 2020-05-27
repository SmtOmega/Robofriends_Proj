import React from "react"
import "./Card.css"

const Card = (props) => {
    return (
        <div className="card-style">
            <img src={`https://robohash.org/ ${props.id}`} alt="robots"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card