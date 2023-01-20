import React from 'react'
import Nav from './components/Nav'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Addproduct from './components/Add-product';
import Productlist from './components/Productlist'
import UpdateProduct from './components/UpdateProduct'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<Productlist/>}/>
          <Route path='/add' element={<Addproduct/>}/>
          <Route path='/update/:id' element={<UpdateProduct/>}/>
          <Route path='/logout' element={<h1>Logout functionality</h1>}/>
          <Route path='/profile' element={<h1>profile detailes</h1>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
