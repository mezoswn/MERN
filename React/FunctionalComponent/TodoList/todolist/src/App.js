import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [checklist, setChecklist] = useState([]);

  return (
    <div className="App">
     
      {checklist.map((todo,idx) => (
        <ToDo
          todo={todo}
          setChecklist={setChecklist}
          index={idx}
          checklist={checklist}
        />
      ))}
      <Form checklist={checklist} setChecklist={setChecklist} />
    </div>
  );
}

export default App;
