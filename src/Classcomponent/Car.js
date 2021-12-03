import React from 'react'

class Car extends React.Component{
    constructor(props){
        super(props);
            this.state = {name : "Tesla"}
    };
    changeCar = () => {
        this.setState({name : "AUDI"})
    }
    render(){
        return(
            <div>
                <h4>my car name {this.state.name} </h4>
                <button onClick={this.changeCar}>UPDATE</button>
            </div>
        ) 
        
    }

}
export default Car