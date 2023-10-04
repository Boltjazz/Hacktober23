 
import "./App.css";
import React,{useState} from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
 
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [ccol, setccol ] = useState('red');



  const toggleMode =()=>{
    if(mode==='light') {
      setmode('dark')
      document.body.style.backgroundColor='#072b45';
document.title="TextUtils -Darkmode"
    }
 
else {
 
setmode('light')
document.body.style.backgroundColor='white';
document.title="TextUtils -Lightmode"
  }
}
 


const Cmode =()=>{
  if (ccol==='green' &&mode==='dark'){
    setccol('red')
    document.body.style.backgroundColor='#471116';
  }
  else 
    if(ccol==='red'&&mode==='dark'){
  setccol('green')
  document.body.style.backgroundColor='rgb(0 53 40)';
  }



  else
  document.body.style.backgroundColor='white';
  
  }
  
   const [text, settext] = useState("Enable light mode")
    
    
    return (<> 
    
    
    <Router> 
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} Cmode={Cmode}
  home="Home" 
  /> 
       {/* <About/> */}
  {/* <Alert alert="This is an Alert!"/>  */}
   <div className="container my-3" mode={mode} Cmode={Cmode}>

   <Routes>
          
   <Route path="/" element={<TextForm  heading='Enter The Text To Analyze' mode={mode}Cmode={Cmode}></TextForm>} />
        <Route path="/about" element={<About mode={mode}/>}  />
        {/* {<TextForm  heading='Enter The Text To Analyze' mode={mode}Cmode={Cmode}></TextForm>}
        */}
        </Routes>
      </div>
      </Router> 

     </>
    );
}


export default App;