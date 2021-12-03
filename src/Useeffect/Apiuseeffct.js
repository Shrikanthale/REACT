import React,{useState,useEffect} from 'react'

function Apiuseeffect(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/employee").then((result)=>{
            result.json().then((res)=>{
                // console.warn(res)
                setData(res)
            })
        })
    },[])
    console.warn(data)
    return(
        <div>
            <h1> Featch API </h1>
            <table border="4">
                <tr>
                    <td>Name</td>
                    <td>Id</td>
                    <td>salary</td>
                </tr>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.Name}</td>
                    <td>{item.id}</td>
                    <td>{item.salary}</td>
                    </tr>
                    )
                }
            </table>
        </div>
    )
}

export default Apiuseeffect