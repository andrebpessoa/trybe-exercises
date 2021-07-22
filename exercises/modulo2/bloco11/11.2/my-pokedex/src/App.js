import './App.css';
import pokemons from './Data';
import Pokedex from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {pokemons.map(({ id, name, type, averageWeight, image }) => {
        return (
          <Pokedex
            key={id}
            name={name}
            type={type}
            averageWeight={averageWeight}
            image={image}
          />
        )
      })}
    </div>
  );
}

export default App;
