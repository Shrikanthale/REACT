import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import MyInfo2 from './componet/myinfo2'
//import ShowDate from './jsx_with_js/ShowDate';
//import Greetures from './jsx_with_js/Greetures';
//import Contact from './contactcard/Contact';
import ChangeColor from './SetState/ChangeColor';
import ChangeForm from './SetState/ChangeForm';
import ChangeFormat from './SetState/ChangeFormat';
import ChangeSet from './SetState/ChangeSet';

//import App from './App';

//function componet
//here is Shri() is parent of App(child)
// function Shri(){
//   return(
//     <div>
//       <App/>
//       <App/>
//       <p>hey shri!!!</p>
//     </div>
//   )
// }
ReactDOM.render(<ChangeForm/>,document.getElementById('root'));


