import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoriteContext from './favoriteContext';
import Navbar from './layouts/Navbar';
import FavoritesPage from './pages/FavoritesPage';
import MainPage from './pages/MainPage';

function App() {
  const [favs, setFavs] = useState([]);
  const favorites = {favs, setFavs};

  return (
    <BrowserRouter>
      <Navbar />
      <FavoriteContext.Provider value={favorites}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/favorites/:id' element={<FavoritesPage />} />
        </Routes>
      </FavoriteContext.Provider>
    </BrowserRouter>
  );
}

export default App;
