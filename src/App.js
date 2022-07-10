
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path = "/" element ={<Home/>}/>
     <Route path = "/signup" element ={<Signup/>}/>

     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
