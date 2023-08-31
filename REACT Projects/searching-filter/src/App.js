import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/product-filter';
import SeeDetails from './components/seedetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/seedetails' element={<SeeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
