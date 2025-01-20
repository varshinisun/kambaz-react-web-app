//import { useState } from 'react'
import './App.css'
import Labs from "./Labs.tsx";
import Kambaz from "./Kambaz";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <div>
        {/* <Labs /> */}
        <Routes>
        <Route path="/" element={<Navigate to="Kambaz"/>}/>
        <Route path= "/" element ={<Navigate to= "Labs" />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
      </HashRouter>
  );
}

export default App
