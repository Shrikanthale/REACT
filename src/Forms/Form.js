import React,{useState} from 'react'

function Form () {
    const [name , setName] =useState("")
    function submit(event){
        event.preventDefault();
        alert(` Youre NAME IS  ${name}`)
    };
    const myStyle = {
        color : "rgb(202,198,25)",
        backgroundColor : "skyBlue"
    }
    return(
        <div>
            <h2 style={myStyle} > React Forms </h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value) }/>
            <button  onClick={submit}> SUBMIT </button>
        </div>
    )
}

export default Form