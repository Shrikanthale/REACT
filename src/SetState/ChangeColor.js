import React from 'react'

class ChangeColor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            brand : "samsung",
            year : "1985"
        }
    }
    changeBrand = () => {
        this.setState({brand:"RealMe"})
    }
    changeYear = () => {
        this.setState({year:"2002"})
    }
    render(){
        return(
            <div>
                <h1>car brand name is {this.state.brand} </h1>
                <h1>year is {this.state.year} </h1>
                <button type="button" onClick={this.changeBrand}>change brand</button>
                <button type="button" onClick={this.changeYear}>change Year</button>
            </div>
        )
    }
}

export default ChangeColor