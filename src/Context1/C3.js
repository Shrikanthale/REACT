import React from 'react'
import {ValueCtx} from './MyCtx'
class C3 extends React.Component {
    static contextType = ValueCtx
    Name = this.context
    render(){
        return(
            <div>
                <p> {this.Name} </p>
            </div>
        )
    }
}

export default C3