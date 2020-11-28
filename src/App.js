import React, { useEffect, useState } from 'react';
import CardList from './components/cardList'
import SearchBox from './components/searchBox'
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    (async() => {
      const users = await (await fetch('http://jsonplaceholder.typicode.com/users')).json();
      console.log('wew')
      setMonsters(users);
    })();

  },[])

  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()));
console.log('render')
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="search monster" handleChange={handleChange} searchField={searchField}/>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
