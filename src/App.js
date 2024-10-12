import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HompePage'; // './components/categories-container/CategoriesContainer';
import Navigation from './routes/home/navigation/Navigation';
// import './categories.styles.scss';




function ShopPage() {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>

  );
}

export default App;
