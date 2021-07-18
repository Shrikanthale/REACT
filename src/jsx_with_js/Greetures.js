import React from 'react'
import reactDom from 'react-dom'

function Greetures(){
    const date = new Date()
    const hours = date.getHours()
    var message = ""

    const style = {
        color : "red",
        backgroundColor : "black",
        fontSize : "150px"
    }

    if(hours<12){
        message="Morning"
        style.color="#150"                                    // it will change color acoording to time or condition of if else 
    }
     else if(hours>=12 && hours<17){
        message="Afternoon"
        style.color="#245"
    }
    else{
        message="Night"
        style.color="#300"
    }
    
    

    return(
       <div>
           <h1 style={style}> Good {message}</h1>
       </div>
    )
}

export default Greetures