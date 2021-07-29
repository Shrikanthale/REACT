import React from 'react'

import A2 from './A2'
import {ValueContext} from './MyCtx'
class A1 extends React.Component{
    
    render(){
        return(
            <div>
               <ValueContext.Provider value="SHRIKANTHALE"><A2/> </ValueContext.Provider>
            </div>
        )
    }
}

export default A1