import React from "react";
import ReactDOM from "react-dom/client";


export function Card(props){
   return <h1 >{props.name}</h1>
}

export function Username({username, second_username}){

    return (
    <>
        <h2>{username}</h2>
        <h2>{second_username}</h2>
    </>

    )

}

