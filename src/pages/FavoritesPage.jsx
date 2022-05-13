import React, { useContext } from 'react'
import FavoriteContext from '../favoriteContext';

const FavoritesPage = () => {
    const favContext = useContext(FavoriteContext);

    return (
        <ul>
            {favContext.favorites.map(f => <li>f.title</li>)}
        </ul>
    );
};

export default FavoritesPage;