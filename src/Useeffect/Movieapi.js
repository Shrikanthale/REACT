import React,{useState,useEffect} from 'react'

function Movieapi(){
    const [movie,setMovies] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/filimlist").then((result)=>{
            result.json().then((res)=>{
                setMovies(res)
            })
        })
    },[])
    console.warn(movie)
    return(
        <div>
            <h2>LIST OF MOVIES</h2>
            <table border = "6">
                <tr>
                    <td>MOVIES NO.</td>
                    <td>LIST OF MOVIES</td>
                    <td>BUDHET</td>
                </tr>
                {
                    movie.map((list)=>
                    <tr>
                        <td> {list.id} </td>
                        <td> {list.movie} </td>
                        <td> {list.Budget} </td>
                    </tr>
                    )
                }
            </table>
        </div>
    )
}

export default Movieapi


// import React,{useState,useEffect} from 'react'

// function Movieapi(){
//     const [movie,setMovies] = useState([])
    
//     useEffect(() => {
//         fetch("http://localhost:3000/filimlist").then((result)=>{
//             result.json().then((res)=>{
//                 setMovies(res)
//             })
//         })
//     },[])
//     console.warn(movie)
//     return(
//         <div>
//             <h2> LIST OF MOVIES  </h2>
//             <table border = "5">
//                 <td>
//                     <tr>
//                         MOVIE NO.
//                     </tr>
//                     <tr>
//                         NAME OF MOVIES
//                     </tr>
//                     <tr>
//                         BUDGET
//                     </tr>
//                 </td>

//                 {
//                     movie.map((list)=>
//                     <td>
//                         <tr>{list.id}</tr>
//                         <tr>{list.movie}</tr>
//                         <tr>{list.Budget}</tr>
//                     </td>
//                     )
//                 }
//             </table>
//         </div>
//     )
// }

// export default Movieapi


// import React,{useState,useEffect} from 'react'

// function Movieapi(){
//     const [movie,setMovie] = useState([])

//     useEffect(()=>{
//       fetch("http://localhost:3000/filimlist").then((result)=>{
//           result.json().then((resp)=>{
//               setMovie(resp)
//           })
//       })
//     },[])
//     console.warn(movie)
//     return(
//         <div>
//             <h2>LIST OF MOVIES</h2>
//             <table border="5">
//                 <tr>
//                     <td>MOVIE NO.</td>
//                     <td>NAME OF MOVIE</td>
//                     <td>BUDGET</td>
//                 </tr>
//                 {
//                     movie.map((list)=>
//                     <tr>
//                         <td> {list.id} </td>
//                         <td> {list.movie} </td>
//                         <td> {list.Budget} </td>
//                     </tr>
//                 )
//                 }
//             </table>
//         </div>
//     )
// }

// export default Movieapi




// import React,{useState,useEffect} from 'react'

// function Movieapi(){
//     const [movie,setMovie] = useState([])
//     useEffect(()=>{
//        fetch("http://localhost:3000/filimlist").then((result)=>{
//            result.json().then((response)=>{
//                setMovie(response)
//            })
//        })
//     },[])
//     console.warn(movie)
//     return(
//         <div>
//             <h2>MOVIE LIST</h2>
//             <table border="3">
//                 <tr>
//                     <td>Movie NO.</td>
//                     <td>NAME OF MOVIE</td>
//                     <td>BUDGET</td>
//                 </tr>
//                 {
//                     movie.map((list)=>
//                     <tr>
//                         <td>{list.id}</td>
//                         <td>{list.movie}</td>
//                         <td>{list.Budget}</td>
//                     </tr>
//                     )
//                 }
//             </table>
//         </div>
//     )
// }

// export default Movieapi