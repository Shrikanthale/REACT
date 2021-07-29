// //without using hooks concept

// import React from 'react'

// class Count0 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count : 0
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <p> click on btn {this.state.count} times </p>
//                 <button onClick = { () => this.setState ({count:this.state.count + 1}) }>click ME</button>
//             </div>
//         )
//     }
// }

// export default Count0

import React from 'react'

class Count0 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 1
        }
    }
    render(){
        return(
            <div>
                <p>click btn {this.state.count} times </p>
                <button onClick = { () => this.setState({count:this.state.count-1}) }>CLICK ME</button>
            </div>
        )
    }
}

export default Count0