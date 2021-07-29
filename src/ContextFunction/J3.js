import React,{useContext} from 'react'
import { Valuecontext } from './Myctxx'

function J3(){
    const name = useContext(Valuecontext)
    return(
        <div>
            <p> {name} </p>
        </div>
    )
}

export default J3