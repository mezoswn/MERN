// import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
                <div>
                    <Switch>
                       <Route path="/people/:id">
                            <Detail />
                        </Route> 
                        <Route path="/people">
                            <ProductList />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
                </div>
            </Router>
      </header>
    </div>
  );
}

export default App;
