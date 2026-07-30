import ReactDOM from 'react-dom/client'
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
                href="https://google.com" 
                target="_blank" 
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


export const reactelement=React.createElement(
    'a',
    {
        href:'https://google.com',
        target:'_blank'
    },
    'click me to visit google'
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//     reactelement
// )



