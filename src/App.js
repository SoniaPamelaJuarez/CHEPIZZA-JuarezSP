import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';




function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar  />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Todos nuestros productos"/>}/>
            <Route path='category/:categoryId' element={<ItemListContainer greeting="Estamos filtrando"/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>





      {/* <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </div>
  );
}

export default App;
