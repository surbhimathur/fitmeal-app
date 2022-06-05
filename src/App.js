import './App.css';

import { Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Mealplan from "./Mealplan";
import Userform from "./Userform";

function App() {
  return (
    <div className="App">
 
      <Routes> 
      <Route  path="/" element={<Homepage />}/> 
        <Route  path="/mealplan" element={<Mealplan />}/>
      </Routes>
    </div>
  );
}

export default App;
