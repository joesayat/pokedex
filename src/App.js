import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      searchfield: '',
    }

    this._onSearchInput = this._onSearchInput.bind(this);
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(data =>  this._fetchAllPokemon(data.results));
  }

  render() {
    return(
      <div className='tc'>
        <SearchBox onSearchInput={this._onSearchInput} />
        <CardList pokemons={this._filterPokemon()}/>
      </div>
    )
  }

  async _fetchAllPokemon(pokemonData) {
    const pokemonsArr = await Promise.all(pokemonData.map(pokemon => {
      return fetch(pokemon.url).then(res => res.json())
    }))

    this.setState({ pokemons: pokemonsArr})
  }

  _onSearchInput(e) {
    this.setState({ searchfield: e.target.value })
  }

  _filterPokemon() {
    const { pokemons, searchfield } = this.state;

    return  pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield)
    })
  }
}

export default App;
