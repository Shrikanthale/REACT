import React from 'react'

class Form1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : " ",
            id : null
        }
    }
    setuserName=(event)=>{
        this.setState({username:event.target.value})
    }
    setId=(event)=>{
        this.setState({id:event.target.value})
    }
    render(){
        return(
            <form>
                <h1>userName : {this.state.username} and id : {this.state.id}</h1>
                <p>USERNAME:</p>
                <input type = "text" name="username" onChange={this.setuserName}/>

                <p>ID:</p>
                <input type = "text" name="id" onChange={this.setId}/>
                
            </form>
        )
    }
}

export default Form1