import { useState } from 'react'


export function Movie({title}){

    return (
        <div>
            <h1>{title}</h1>
            <Liked/>
            
        </div>
    )
}


export function Liked(){
    const [haslike,setLike]=useState(false);

    return (
        <button onClick={()=>{setLike(!haslike)}}>
           
            {haslike ? "❤️" : "🤍"}
        </button>
    )


}