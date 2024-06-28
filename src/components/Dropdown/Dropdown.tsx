import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import './Dropdown.css'

//API de Pokemones
const BASE_URL = 'https://pokeapi.co/api/v2';

const PokemonSelection: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //Función para obtener los datos del pokémon, actualizar el estado con estos datos y visualizar el spiner
  const handlePokemonSelect = async (pokemonName: string) => {
    try {
      setLoading(true);
      //Petición para obtener datos del pokémon
      const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
      setPokemonData(response.data);
      setSelectedPokemon(pokemonName);
      //Almacenamos los datos del pokémon seleccionado en localStorage
      localStorage.setItem('selectedPokemon', JSON.stringify(response.data));
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    } finally {
      //Esperamos 3 segundos para mostrar el spinner
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <label htmlFor="pokemonSelect" className="form-label">Selecciona un Pokémon:</label>
        <select className="form-select" id="pokemonSelect" onChange={(e) => handlePokemonSelect(e.target.value)}>
          <option value="">Pokémon...</option>
          <option value="bulbasaur">Bulbasaur</option>
          <option value="ivysaur">Ivysaur</option>
          <option value="venusaur">Venusaur</option>
          <option value="charmander">Charmander</option>
          <option value="charizard">Charizard</option>
          <option value="squirtle">Squirtle</option>
          <option value="wartortle">Wartortle</option>
          <option value="blastoise">Blastoise</option>
          <option value="butterfree">Butterfree</option>
          <option value="raticate">Raticate</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center mt-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      ) : selectedPokemon && pokemonData ? (
        <PokemonCard
          name={pokemonData.name}
          order={pokemonData.order}
          types={pokemonData.types.map((type: any) => type.type.name)}
          moves={pokemonData.moves.map((move: any) => move.move.name)}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default PokemonSelection;
