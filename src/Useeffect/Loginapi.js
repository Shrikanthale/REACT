import React,{useState,useEffect} from 'react'

function Loginapi(){
    const[log,setLogin] = useState("")
    useEffect(()=>{
      fetch(" http://localhost:3000/login").then((result)=>{
        result.json().then((res)=>{
          setLogin(res)
        })
      }) 
    },[])
    console.warn(log)
    return(
        <div>
           <h2> LOGIN API </h2>
          <table border = "3">
           <tr>
             <td>id</td>
             <td>Email</td>
             <td>Password</td>
            </tr>  

            {
              log.ma
            }
          </table> 
        </div>
    )
}

export default Loginapi