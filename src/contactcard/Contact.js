import React  from "react"
import Contactcomp from './Contactcomp'
import data from './ContactData'

function Contact(){
    const ContatComp = data.Map(user =>
        <Contactcomp Contact ={{
            name:user.name,
            Email:user.Email,
            imgURl : user.imgURL
        }}/>)
        return(
            <div>
                {this.Contactcomp}
            </div>
        )
    
}

export default Contact







// import React from 'react'
// import Contactcomp from './Contactcomp'
// import data from './ContactData'


// function Contact(){
//     const Contactcomp = data.map(user=>
//         <Contactcomp Contact = {{
//             name : user.name,
//             Email : user.Email,
//             imgURL : user.imgURL
//         }} /> )
//     return(
//            <div>
//                {Contactcomp}
//            </div>
       
//     )
// }
       
// export default Contact


 // <div>
            
        //          {/* <Contactcomp Contact = {{
        //             name : "shrikant kanthale",
        //             Email : "Email:skanthale9@gamil.com",
        //             imgURL : "http://placekitten.com/200/300"
        //         }}/>

        //             <Contactcomp Contact = {{
        //             name : "shrikanthale",
        //             Email : "Email:skanthale9@gamil.com",
        //             imgURL : "http://placekitten.com/200/300"
        //         }}/>  */}
        // </div>
        
            /* <div>
                <img src="http://placekitten.com/200/300"/>
                <p> name:shrikant kanthale</p>
                <p> Email:skanthale9@gamil.com</p>
            </div>
            <div>
                <img src="http://placekitten.com/200/300"/>
                <p> name:Rahul kumar</p>
                <p> Email:skanthale9@gamil.com</p>
            </div>
            <div>
                <img src="http://placekitten.com/200/300"/>
                <p> name:anni</p>
                <p> Email:skanthale9@gamil.com</p>
            </div>
            <div>
                <img src="http://placekitten.com/200/300"/>
                <p> name:gaurav</p>
                <p> Email:skanthale9@gamil.com</p>
            </div> */
        
    


