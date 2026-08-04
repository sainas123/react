import { useState } from 'react'
import {useEffect} from 'react'


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

    const[likecount,setLikecount]=useState(0);

    useEffect(()=>{

        


        
    },[haslike])

    return (
        <>
        
            <button onClick={()=>{setLikecount(likecount+1)}}>
                like movie
                {likecount>0?"❤️":"🤍"}
                
            </button>
            
            <button onClick={()=>{setLikecount(Math.max(0,likecount-1))}}>
                dislike movie:

                
                
                {likecount>0?"❤️":"🤍"}

            </button>

            <div>
                number of likes:{likecount}
            </div>

            <div> {likecount > 0 ? "❤️" : "🤍"} </div>
        
        </>
    )


}