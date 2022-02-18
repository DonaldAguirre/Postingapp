import React from 'react';
import './style.css';

import Title from './components/Title';
import Search from './components/Search';
import Card from './components/Card';

export default function App() {
  return (
    <div>
      <Title />
      <Search />
      <Card />
    </div>
  );
}
