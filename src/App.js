import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './routes/home/HompePage'; // './components/categories-container/CategoriesContainer';
import Navigation from './routes/home/navigation/Navigation';
import SignInForm from './routes/sign-in/SignInForm';
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
        <Route path="sign-in" element={<SignInForm />} />
      </Route>
    </Routes>

  );
}

export default App;
