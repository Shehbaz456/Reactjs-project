// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// let name = "Shehbaz";
function App() {

  const [mode,setmode]=useState('light');
  const [alert,setAlert] =useState(null);

  const ShowAlert = (message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null);
     }, 2000);
  } 

  const removeBodyClases=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    // document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

 const toggleMode=(cls)=>{
   removeBodyClases();
   console.log(cls);
   document.body.classList.add('bg-'+cls);
    if(mode==="light"){
      setmode("Dark");
      document.body.style.background="#087ea4"
      document.body.style.color="#fff";
      ShowAlert("Dark mode Enabled","success")
    }
    else{
      setmode("light");
      document.body.style.background="#fff"
      document.body.style.color="#000"
      ShowAlert("Light mode Enabled","success")
    }
  }

  return (
    <>
    <Router>
    <Navbar title="UltimoReact" abouText="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={ <About mode ={mode}/>}></Route>
        <Route exact path="/" element={ <TextForm ShowAlert ={ShowAlert} heading="Enter the text to analiyze below" mode={mode} />}>
        </Route>
      </Routes>
    </div>
    </Router>

    


    </>
  );
}

// {/* <div className="container">
// <h1>Hello {name}</h1>
//   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, unde reprehenderit! Reiciendis non consequuntur saepe recusandae. Distinctio perspiciatis magni libero eligendi, dignissimos eaque commodi illo impedit laborum quibusdam ducimus deserunt.</p>
// </div> */}
export default App;
