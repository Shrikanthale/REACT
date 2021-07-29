import React from 'react'

import J2 from './J2'
import {Valuecontext} from './Myctxx'
function J1(){
    return(
        <div>
           <Valuecontext.Provider value="KARTHIK"><J2/> </Valuecontext.Provider>
        </div>
    )
}
export default J1