import React from "react"
import Card from './Card';


const CardList = ({robots})=>{
    const robofriends = robots.map((robot, i)=>{
        return <Card key={robot.id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
    <div className="card-list">
        {robofriends}
    </div>  
    )
}

export default CardList