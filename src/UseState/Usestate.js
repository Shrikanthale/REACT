// import React,{useState}  from 'react'

// function Usestate(){
//     const [Num , setNum] = useState(0);
//     function increment(){
//         setNum(Num+1)
//     }
//     function Decrement(){
//         setNum(Num-1)
//     }
//     return(
//         <div>
//             <h2>UseState</h2>
//             <h2> {Num} </h2>
//             <button onClick={increment}>Increment</button>
//             <button onClick={Decrement}>Decrement</button>
//         </div>
//     )
// }

// export default Usestate


import React , {useState} from 'react'

function Usestate(){
    const [num,setNum] = useState(0)
    const  increment = () => {
        setNum(num+1)
    }
    const decrement = () =>{
        setNum(num-1)
    }
    const nutral = () => {
        setNum(0)
    }
     return(
        <div>
            <h2>USESTATE</h2>
            <h1> {num} </h1>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={nutral}>NUTRAL</button>
        </div>
    )
}

export default Usestate