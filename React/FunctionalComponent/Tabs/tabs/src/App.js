import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';

function App() {
  const tabsArr = [
    {
      label: "Tab 1",
      content: "This is content from Tab 1"},
    {
      label: "Tab 2",
      content: "This is content from Tab 2"
    },
    {
      label: "Tab 3",
      content: "This is content from Tab 3"
    }
  ];


  return (
    <div className="App">
      <h1> Tabs</h1>
      <Tab tabsArr={tabsArr}/>
    </div>

  );
}

export default App;
