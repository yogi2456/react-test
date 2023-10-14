
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Q2 from './Components/Q2';
import Login from './Components/Q3/Login';
import Homepage from './Components/Q5/Homepage';
import Register from './Components/Q3/Register';
import Products from './Components/Q4/Products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/Q2' element={<Q2/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
