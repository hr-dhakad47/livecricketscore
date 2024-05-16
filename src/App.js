
import './App.css';
import Crickinfo from './Components/Crickinfo';

import {Routes, Route} from 'react-router-dom';
import Pointstable from './Components/Pointstable';
import Home from './Components/Home';

function App() {
  return (
    
        
     <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/Crickinfo"  element={<Crickinfo/>}/>
        <Route path="/PointsTable"  element={<Pointstable/>}/>
      </Route>
     </Routes>
     
    
  );
}

export default App;
