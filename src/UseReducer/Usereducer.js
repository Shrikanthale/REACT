// import React,{useReducer} from "react";

// const initialistate = 0;

// function reducer(state, action){
//   switch (action.type){
//       case "increment":
//           return state + 1;
//       case "decrement":
//           return state - 1
//         default:
//             throw new Error      
//   }
// }

// function Usereducer(){
//     const [state,dispatch] = useReducer(reducer,initialistate)
//     return(
//         <div>
//             <h4>USEREDUCER</h4>
//             <h1> {state} </h1>
//             <button onClick={() => dispatch({type:"increment"})}>INCREMENT</button>
//             <button onClick={() => dispatch({type:"decrement"})}>DECREMENT</button>
//         </div>
//     )
// }

// export default Usereducer

import React,{useReducer} from 'react'

const initialistate = 0;

function reducer(state,action){

   switch (action.type){
       case "Table4" :
           return state + 4;
       case "Table8" : 
           return state + 8;
       default:
           throw new Error        
   }
}
function Usereducer(){
    const [state,dispatch] = useReducer(reducer,initialistate)

    return(
        <div>

            <h2> useReducer </h2>
            <h1> {state} </h1>
            <button onClick={() => dispatch({type:"Table4"})}> ADD by4  </button> <br></br>
            <button onClick={() => dispatch({type:"Table8"})}> ADD by8   </button>
        </div>
    )
}

export default Usereducer