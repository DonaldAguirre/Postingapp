import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="title">
        <h1 className="title-text">Posting List</h1>
      </div>
      <div className="search">
        <input type="text" className="search-input" placeholder="Busqueda" />
        <button className="search-button">Buscar</button>
      </div>
      <div className="list"></div>
    </div>
  );
}
