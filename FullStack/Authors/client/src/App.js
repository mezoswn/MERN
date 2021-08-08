import './App.css';
import Main from './views/Main';
import New from './views/New';
import { Router } from '@reach/router';
import Update from './views/Update';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Update path="/edit/:id" />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
