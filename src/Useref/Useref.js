// import React , {useRef} from 'react'

// function Useref(){
//     const textRef = useRef(null)

//     function submit(e){
//         // console.log("function call")
//         // textRef.current.value = "10212"
//          textRef.current.focus();
//          textRef.current.style.color = "violet"
//         e.preventDefault();
//         // console.log(textRef.current)
//         console.log(textRef.current.value)
//     }
//     return(
//         <div>
//             <h1> useRef in Hooks </h1>
//             <input ref={textRef} type="text" />
//             <br/><br/>
//             <button onClick = {submit} > Click </button>

            
//         </div>
//     )
// }

// export default Useref




// import React,{useRef,useState} from 'react'

// function Useref(){

    
//     const [show , setShow] = useState(false)
//     const useText = useRef(null)

//     function submit(e){
//         e.preventDefault();
//         // console.log(useText.current.value)
//         // console.log(useText.current.style.color="red")
//         const name = useText.current.value
//         name === " " ? alert("Please enter fill") : setShow(true)
//     }
//     return(
//         <div>
//             <p>USEREF IN HOOKS</p>
//             <input type="text" ref={useText} />
//             <br></br>
//             <button onClick = {submit}>SUBMIT</button>

//             <h1> { show ? `Your Name IS ${useText.current.value}`  : " " } </h1>
//         </div>
//     )
// }

// export default Useref


// import React, {useRef,useState} from 'react'


// function Useref(){

//     const useName = useRef(null)
//     const [show , setShow] = useState(false)

//     function submit(e){
//         e.preventDefault();
//         // console.log(useName.current.value)

//         const name = useName.current.value
//         name === " " ? alert("PLAEASE FILL INPUT") : setShow(true)
//     }
//     return(
//         <div>
//             <h5>UseREF in hooks</h5>
//             <input type="text" ref={useName} />
//             <button onClick = {submit}>Submit</button>

//             <h2> { show ? `YOUR NAME IS : ${useName.current.value} ` : " " } </h2>
//         </div>
//     )
// }

// export default Useref



import { useState, useEffect, useRef } from "react";


function Useref() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(500);

  useEffect(() => {
    count.current = count.current - 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default Useref