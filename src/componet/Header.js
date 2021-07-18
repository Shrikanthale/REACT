import React from 'react'
import '../style.css'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1 className="Nav" > {this.props.name} : software student</h1>
            </div>
        )
    }
}

export default Header

// function Header(props){
//     return (
//         <div>
//             <h1 className="Nav" > {props.name} : software student</h1>
//         </div>
//     )
// }