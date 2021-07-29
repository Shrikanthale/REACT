
import React from 'react'
import C2 from './C2'
import {ValueCtx} from './MyCtx'
class C1 extends React.Component {
    render(){
        return(
            <div>
                <ValueCtx.Provider value = "SHRIKANTHALE"><C2/></ValueCtx.Provider>
            </div>
        )
    }
}

export default C1