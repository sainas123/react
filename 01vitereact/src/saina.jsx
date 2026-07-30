
import React from 'react'

export function Saina(){
    return (
        <h2>hello world</h2>
    )
}


//a function with html 
function Practice(){

    return (
        <div>
            <h3>practicing react</h3>
            <a
                href="https://google.com" //a means anchor element. It creates a clickable link.
                target="_blank" //open the link in a new tab
            >
            visit google
            </a>
        </div>
    )

}
export default Practice

//this is a react component

export function Create(){

    //react element
    return React.createElement(
        'div',
        null,

        React.createElement(
            'h3',
            null,
            'practicing another way',

        ),

        React.createElement(

            'a',
            {
                href:'https://google.com',
                target:'_blank'
            },
            'Visit google'

        )
    )

}



