import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Cart from './Components/Cart';
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='Cart' element={<Cart/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
