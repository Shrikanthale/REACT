import React from 'react'
import Toolbaar from './Toolbaar'
import {ValueCtx} from './MyCtx'

class F1 extends React.Component{
    render(){
        return(
            <div>
                <ValueCtx.Provider value = "SHRIKANT" > <Toolbaar/> </ValueCtx.Provider>
            </div>
        )
    }
}

export default F1

    