import React, { useState } from 'react'

const SearchForm = ({ onSearch }) => {
    const [searchString, setSearchString] = useState('');

    return (
        <form onSubmit={onSearch}>
            <div className="input-group m-3 row">
                <input
                    name='search'
                    className="form-control col-10"
                    placeholder="Harry Potter, The Godfather, etc."
                    value={searchString} 
                    onChange={e => setSearchString(e.target.value)}/>
                <button disabled={!searchString} className="btn btn-outline-secondary col-2" type="submit" id="button-addon2">Button</button>
            </div>
        </form>
    )
}

export default SearchForm;