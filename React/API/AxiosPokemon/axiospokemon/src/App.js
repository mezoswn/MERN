import logo from './logo.svg';
import './App.css';
import PokemonAxios from './components/PokemonAxios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonAxios/>
      </header>
    </div>
  );
}

export default App;
