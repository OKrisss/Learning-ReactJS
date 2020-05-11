import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { ChosenCharacter } from './components/chosen-character/chosen-char.component';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      chosenMonster: []
    }
  } 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))    
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  chosenChar = (e) => {
    console.log(e);
  }

  render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      return (
      <div className="App">
        <ChosenCharacter />
        <SearchBox 
          placholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} handleChange={this.chosenChar}/>
      </div>
    );
  }
}

export default App;
