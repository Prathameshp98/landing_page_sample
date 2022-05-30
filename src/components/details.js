import React from 'react'
import {useState, useEffect} from "react";

export default function Details() {

    const [forms, setForms] = useState([]);
        useEffect(() => {
            fetch("http://localhost:1337/api/forms").then(res => res.json()).then(res => {
                setForms(res.data)
                console.log(res.data)
            }) 

        }, [])

    return (
        <div>
            {forms.map(({id, attributes}) => {
                return (<div className="inner-detail-box">
                    <p key={id}><em>Name:</em> {attributes.Name}</p>
                    <p><em>Email:</em> {attributes.Email}</p>
                    <p><em>Phone:</em> {attributes.Phone}</p>
                    <p><em>Comments:</em> {attributes.Comment}</p>
                    <br></br>
                    <hr />
        </div>)
    })}
    </div>
  )
}
