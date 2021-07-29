import React from 'react';
import ReactDOM from 'react-dom';
import F1 from './Context/F1';
import C1 from './Context1/C1';
import P1 from './Context2/P1';
import A1 from './Context3/A1';
import J1 from './ContextFunction/J1';
import Count from './HOOKS/count';
import Count0 from './HOOKS/Count0';
import Form1 from './setForm.js/setForm1';
import setForm2 from './setForm.js/setForm2';
import Form2 from './setForm.js/setForm2';
//import './index.css';
//import MyInfo2 from './componet/myinfo2'
//import ShowDate from './jsx_with_js/ShowDate';
//import Greetures from './jsx_with_js/Greetures';
//import Contact from './contactcard/Contact';
import ChangeColor from './SetState/ChangeColor';
import ChangeForm from './SetState/ChangeForm';
import ChangeFormat from './SetState/ChangeFormat';
import ChangeSet from './SetState/ChangeSet';
import {Route,Link,BrowserRouter,Switch} from 'react-router-dom'

import Application1 from './Route1/Application1';
import About1 from './Route1/About1';
import ContactUs1 from './Route1/ContactUs1';
import NotFound1 from './Route1/NotFound1';

import Application from './Routes/Application'
import About from './Routes/About'
import ContactUs from './Routes/ContactUs'

import Student from './Route2/Student';
import Name from './Route2/Name';
import Age from './Route2/Age';
import ContactStud from './Route2/ContactStud';
import NotFound2 from './Route2/NotFound2';
import Mounting1 from './LifeCycle1/Mounting1';
import Mounting2 from './LifeCycle2/Mounting2';
import Updating from './LifeCycle1/Updating';


const routing = (
    <BrowserRouter>
    <div>
        <ul>
            <li>
                <Link to = "/"> Home Page Here </Link>
            </li>
            <li>
                <Link to = "/About"> Home Page Here </Link>
            </li>
            <li>
                <Link to = "/ContactUs"> Home Page Here </Link>
            </li>
        </ul>
       <Route exact path = "/" component = {Application}/>
       <Route path = "/About" component = {About}/>
       <Route path = "/ContactUs" component = {ContactUs}/>
    </div>
    </BrowserRouter>
)  


const routing1 = (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to = "/" > shri</Link>
                </li>
                <li>
                    <Link to = "/About" > Age:22</Link>
                </li>
                <li>
                    <Link to = "/ContactUs" > 7736878581</Link>
                </li>
            </ul>
          <switch>
          <Route exact path = "/" component = {Application1}/>
          <Route  path = "/About" component = {About1}/>
          <Route  path = "/ContactUs" component = {ContactUs1}/>
          <Route component = {NotFound2}/>
          </switch> 
        </div>
    </BrowserRouter>
)

const routing2 = (
    <BrowserRouter>
    <ul>
        <li>
            <Link to = "/">Student Deaitails</Link>
        </li>
        <li>
            <Link to = "/Name"> NAME </Link>
        </li>
        <li>
            <Link to = "/Age">AGE</Link>
        </li>
        <li>
            <Link to = "/Contact">Contact </Link>
        </li>
    </ul>
    <switch>
    <Route exact path = "/" component = {Student} />
    <Route path = "/Name" component = {Name}/>
    <Route path = "/Age" component = {Age}/>
    <Route path = "/Contact" component = {ContactStud}/>
    <Route component = {NotFound2}/>
    </switch>
    </BrowserRouter>
)



ReactDOM.render(<Updating color="White" />,document.getElementById('root'));




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