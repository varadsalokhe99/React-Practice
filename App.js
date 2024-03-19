import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { useState } from 'react';
// import About from './Components/About';



function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () =>{
    if(mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#171414';
    }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
    
  }
  return (
    <>
              
       <Navbar title="My-app" abouttext="About Us?"  mode={mode} toggleMode={toggleMode}/>
       <div className="container my-3">
       <TextArea heading="Enter text analys below" mode={mode}/>
       {/* <About/> */}
       </div>
       
    </>
   
  );
}

export default App;
