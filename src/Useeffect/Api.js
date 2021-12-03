import React,{useState,useEffect} from 'react'

function Api(){
    const [student , setStudent] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/student").then((result)=>{
            result.json().then((res)=>{
                setStudent(res)
            })
        })
    },[])
    console.warn(student)
    return(
        <div>
            <h3>API STUDENT</h3>
            <table border="3">
                <tr>
                    <td>id</td>
                    <td>Name</td>
                </tr>
                {
                    student.map((item)=>
                        <tr>
                            <td> {item.id} </td>
                            <td> {item.name} </td>
                        </tr>
                    )
                }
            </table>
        </div>
    )
}

export default Api