import React, { useContext } from 'react'
import { Link as button } from 'react-router-dom'
import FavoriteContext from '../favoriteContext'

const MovieListItem = ({ movie }) => {
  const { favs, setFavs } = useContext(FavoriteContext);

  const handleAddFavorite = (movie) => {
    const fav = { id: movie.imdbID, title: movie.Title };
    if (!favs.some(f => f.id === fav.id)) {
      setFavs([...favs, fav]);
    } else console.error(`Favorite with ${fav.id} id already exists.`);
  }

  return (
    <div className="card mb-3" style={{ maxWidth: 540, padding: 0 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={movie.Poster}
            className="img-fluid rounded-start"
            alt={movie.Title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}/`}
              style={{ all: 'unset', cursor: 'pointer' }}>
              <h5 className="card-title">{movie.Title} {`(${movie.Year})`}</h5>
            </a>
            <p className="card-text">{movie.Type}</p>
            <button
              className='btn btn-primary'
              onClick={e => handleAddFavorite(movie)}>Add to favorites. ⭐</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieListItem;