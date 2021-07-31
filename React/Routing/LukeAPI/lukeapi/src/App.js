import './App.css';
import Result from './components/Result';
import StarsApi from './components/StarsApi';
import { Router } from '@reach/router';

function App() {
  const starWars =['planets', 'spaceships', 'vehicles', 'people', 'films' ,'species'];
  return (
    <div className="App">
      <StarsApi label ="Search for" datalabel="ID" data = {starWars} />
      <Router>
        <Result path="/:starType/:id"/>
      </Router>
    </div>
  );
}

export default App;
