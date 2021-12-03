// import React from 'react'

// function Event() {
//     const shoot = () => {
//         alert("What Cover Drive Shoot")
//     }
//     return( 
//         <div>
//             <button onClick={shoot}> Take a Shoot </button>
//         </div>
//      )
// }

// export default Event

import React from 'react'

function Event() {
    const shoot = (w)=>{
        alert(w)
    }
    return(
        <div>
            <button onClick={ () => shoot("Wicket") }>Tak a Delivery</button>
        </div>
    )
}

export default Event