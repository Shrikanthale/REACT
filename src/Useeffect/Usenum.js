import React , {useState,useEffect} from 'react'

function Usenum(){
    const [num , setNum] = useState(0);
    const [nums , setNums] = useState(100);
    
    // useEffect(() =>{
    //     alert("i am notifaction")
    // })
    
    // useEffect(() =>{
    //     alert("i am notifaction")
    // },[])                            it will give notification at the first time render

    useEffect(() =>{
        alert("i am notifaction")
    }, [num] );                               // it will give notification only one button i.e num

    return(
        <div>
            <button onClick={() => setNum(num+1)}>Upadate NUmber {num}</button>
            <button onClick={() => setNums(nums+1)}>Update value {nums} </button>
        </div>
    )
}

export default Usenum