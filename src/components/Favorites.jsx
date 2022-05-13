import React, { useContext, useState } from 'react'
import FavoriteContext from '../favoriteContext'

const Favorites = () => {
    const {favs, setFavs} = useContext(FavoriteContext);
    const [favsName, setFavsName] = useState('');

    const handleSave = () => {
        console.log(favsName);
    }

    return (
        <div className="card" style={{width: '18rem'}}>
            <input 
                className='form-control' 
                placeholder='List name' 
                value={favsName} 
                onChange={e => setFavsName(e.target.value)}/>
            <ul className="list-group list-group-flush">
                {favs.map(f => <li key={f.id} className="list-group-item">{f.title}</li>)}
            </ul>
            <button className='btn btn-primary' disabled={!favsName} onClick={handleSave}>Save</button>
        </div>
    )
}

export default Favorites