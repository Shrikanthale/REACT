import React from 'react'

function Contactcomp(props){
    return(
        <div>
            <img src = {props.Contact.imgURL}/>
            <p> {props.Contact.name} </p>
            <p> {props.Contact.Email} </p>
        </div>
    )
}


export default Contactcomp


// function Contactcomp(props){
//     return(
//         <div>
//             <img src = {Props.Contact.imgURL}/>
//             <p> {props.Contact.name} </p>
//             <p> {props.Contact.Email} </p>
//         </div>
//     )
// }