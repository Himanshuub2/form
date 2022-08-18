
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import AllDetails from "./components/AllDetails";

import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path = "/" element ={<Home/>}/>
     <Route path = "/signup" element ={<Signup/>}/>
     <Route path = "/all" element ={<AllDetails/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
