import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers = [
        {
          name: 'Iron Man',
          identity: 'Tony Stark',
          img: "https://icons-for-free.com/free-icons/png/512/2624896.png",
          species: 'Human',
          age: 48,
          affiliation: ['MIT', 'Stark Industries', 'S.H.I.E.L.D', 'Avengers', 'Damage Control'],
          status: 'Alive'
        },
        {
          name: 'Captain America',
          identity: 'Steve Rogers',
          img: "https://icons-for-free.com/free-icons/png/512/2624893.png",
          species: 'Human',
          age: '100',
          affiliation: ['United States Army', 'United Service Organizations', 'United States Department of the Treasury', 'SSR', 'Howling Commandos', 'S.H.I.E.L.D', 'Avengers'],
          status: 'Alive'
        },
        {
          name:'Spider-Man',
          identity: 'Peter Parker',
          img: "https://icons-for-free.com/free-icons/png/512/2624863.png",
          species: 'Human',
          age: 16,
          affiliation: ['Midtown School of Science and Technologu', 'Avengers'],
          status: 'Deceased'
        },
        {
          name: 'Thor',
          identity: 'Thor Odinson',
          img: "https://icons-for-free.com/free-icons/png/512/2624889.png",
          species: 'Asgardian',
          age: 1055,
          affiliation: ['Asgardian Royal Family', 'Avengers', 'Revengers'],
          status: 'Alive'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
