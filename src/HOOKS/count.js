// import React,{useState}  from 'react'

// function Count(){
//     const [count, setCount] = useState(100)
//     return(
//         <div>
//             <p> clicked {count} times </p>
//             <button onClick = {()=>setCount(count+1)}>click here</button>
//         </div>
//     )
// }

// export default Count

// useSate fun imported from library , its category of HOOKS or its tupe of HOOKS
// multiple fun in HOOKS & one of them is useSate 
// using useSate u provide default value (100)
// its return two values  i.e variable and function so here is count and setCount respectively 
import React,{useState} from "react"

function Count() {
    const [count , setCount] = useState(5)
    const [count1 , setCount1] = useState(10)
    return(
        <div>
        <p> clicked {count} times </p>
        <button onClick = { () => setCount(count * 2) }>CLICK HERE</button>
        <p> clicked {count1} times </p>
        <button onClick = { () => setCount1(count1 - 2) }>CLICK HERE</button>
    </div>
    )
}

export default Count