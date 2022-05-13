import { createContext } from "react";

const FavoriteContext = createContext({
    favs: [],
    setFavs: () => {} 
});

export default FavoriteContext;