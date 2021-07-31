import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Change from './components/Change';
import DashboardComponent from './components/DashboardComponent';
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      
        {/* <List />
        <LogingComponent />
        <DashboardComponent/> */}
        <Router>
          <List path="/home" />
          <Change path="/:number" />
          <Change path="/:number/:color/:backgroundcolor" />
        </Router>
      
    </div>
  );
}

export default App;
