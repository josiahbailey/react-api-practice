import React from 'react'

export default function Card(props){
    console.log(props)
    const char = props.data
    return (
        <div>
            <h3>{char.name}</h3>
            <img src={char.image}/>
            <h2>{char.species}</h2>
            <p>{char.origin.name}</p>
            <p>{char.location.name}</p>
            <p>{char.gender}</p>
        </div>
    )
}