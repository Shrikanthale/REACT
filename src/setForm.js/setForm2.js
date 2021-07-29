import React from 'react'

class setForm2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username : " ",
            id : null
        }
    }
    
    setForm = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    setBtn = (event) => {
        event.preventdefault()
        alert("hello" + this.state.username)
    }
    render(){
        return(
            <form onSubmit={this.setBtn} >
                <h1>USERNAME: {this.state.username} ID : {this.state.id}</h1>
                <p>username:</p>
                <input type="text" name="username" onChange={this.setForm}/>

                <p>id:</p>
                <input type="text" name="id" onChange={this.setForm}/>

                <input type="submit"/>
            </form>
        )
    }
}
export default setForm2