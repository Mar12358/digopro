// Entry point for the build script in your package.json
import './app.css';
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reserve from './components/Reserve';
import Nav from './components/Nav';
import Product from './components/Product';
import MyReservations from './components/MyReservations';
import AddProduct from './components/AddProduct';
import DeletePage from './pages/DeletePage';
import Details from './components/Details';

const App = () => (
  <div className="container-column">
    <Nav />
    <Routes className="container-routes">
      <Route index element={<Product />} />
      <Route path="products" element={<Product />} />
      <Route path="reserve" element={<Reserve />} />
      <Route path="my-reservations" element={<MyReservations />} />
      <Route path="add_product" element={<AddProduct />} />
      <Route path="delete_product" element={<DeletePage />} />
      <Route path="product_details" element={<Details />} />
    </Routes>
  </div>
);

export default App;
