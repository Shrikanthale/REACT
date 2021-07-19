import React from 'react'

class ChangeForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : " ",
            age : null
        }
    }
    // setName = (event) => {
    //     this.setState({username:event.target.value})
    // }
    // setAge = (event) => {
    //     this.setState({age:event.target.value})
    // }
    setFormData = (event) => {
        if(event.target.name === "age" && event.target.value<=18){
            this.setState({errorMsg:<strong>please enter age more than 18</strong>})
            return
        }
        this.setState({errorMsg:" "})
        this.setState({[event.target.name]:event.target.value})
    }
    setForm = (event) => {
        event.preventDefault()
        alert("hello " + this.state.username)
    }
    
    render(){
        return(
            <form onSubmit={this.setForm} >
                <h1>username is {this.state.username} and your age is {this.state.age} </h1>
                <p>username:</p>
                <input type = "text" name="username" onChange= {this.setFormData}/>

                <p>Age:</p>
                <input type = "text" name = "age" onChange = {this.setFormData} />
                {this.state.errorMsg}
                <input type="submit" />
            </form>
        )
    }
}

export default ChangeForm