import React, { Children } from 'react'
import Person from "./Person";

function PersonList() {
    const names = ['ash', 'gustavo', 'shawn'];
    const personList = [
        {
            id:1,
            name:"Chen",
            skills:"Angular"
        },
        {
            id:2,
            name:"shawn",
            skills:"react"
        },
        {
            id:3,
            name:"gustavo",
            skills:"vue"
        }
    ]
    // const peopleList = personList.map(person => <Person key={person.id} person={person}/>);
    // second way:
    const peopleList = names.map((name, index) => <h2 key={index} >{name}</h2>)
    return (
        <div>
            {peopleList}
        </div>
    )
}

export default PersonList
