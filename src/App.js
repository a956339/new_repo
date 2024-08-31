
import './App.css';
import Navbar from './Components/Hearder/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import SinUp from './Components/sinUpPage/SinUp';
import Login from './Components/sinUpPage/Login';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import { Provider } from 'react-redux';
import { store } from '../src/Redux-toolkit/Store';
import ProductPage from './Components/ProductPage/ProductPage';
// import { useEffect } from 'react';
import CartPage from './Components/CartPage/CartPage';

function App() {

//   useEffect(() => {
//     // Disable right-click
//     const handleContextMenu = (e) => {
//         e.preventDefault();
//     };

//     document.addEventListener('contextmenu', handleContextMenu);

//     return () => {
//         document.removeEventListener('contextmenu', handleContextMenu);
//     };
// }, []);
  return (
    <div className="App">
   <Provider store={store}>
   <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/' element={<HomePage />}/>
          <Route path='/Home' element={<HomePage />}/>
          <Route path='/Sinup' element={<SinUp />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/ProductPage' element={<ProductPage />}/>
          <Route path='/CartPage' element={<CartPage />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   </Provider>
    </div>
  );
}

export default App;
