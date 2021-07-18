import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

class MyInfo2 extends React.Component{
    render(){
        return (
            <div>
               <Header name= "kshit"/>
               <Main/>
               <Footer/>
            </div>
        )
    }
}

export default MyInfo2

// function MyInfo2(){
//     return (
//         <div>
//            <Header name= "karthik"/>
//            <Main/>
//            <Footer/>
//         </div>
//     )
// }