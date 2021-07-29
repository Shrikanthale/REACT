import React from 'react'
import {ValueContext} from './MyCtx'
class A3 extends React.Component{
    static contextType = ValueContext
    name = this.context
    render(){
        return(
            <div>
               <p> {this.name} </p> 
            </div>
        )
    }
}

export default A3