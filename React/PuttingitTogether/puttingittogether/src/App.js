import logo from './logo.svg';
import './App.css';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Card firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
      <Card firstName={"Smith"} lastName={"John"} age={88} hairColor={"Brown"} />
      <Card firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"} />
      <Card firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"} />
    </div>
  );
}

export default App;
