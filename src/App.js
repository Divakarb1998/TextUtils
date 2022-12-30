// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';



// THis is the code for everything in react


function App() {
  const [mode, setMode] = useState('light'); //whether Dark Mode Is Enabled Or Not
  const [alert, setAlert] = useState(null);



  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
   if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark Mode Has Been Enabled","success");
    //  document.title = 'TextUtils - Dark Mode';
   }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has Been Enabled","success");
    // document.title = 'TextUtils - Light Mode';

   }
  }
  return (
    <>
  
      <Navbar title="TextUtils" aboutText="About The App" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Your Text To Analyze" mode={mode} />    
      </div>
    </>
  );
}

export default App;
