import React from 'react';

function Search(props) {
  return (
    <div className="search">
      <input type="text" className="search-input" placeholder="Busqueda" />
      <button className="search-button">Buscar</button>
    </div>
  );
}

export default Search;
