import { useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');
  const onChange = ({ target: { value }}) => {
    setMsg(value);
  }

  return (
    <div className="App">
      <h1>
        Testing new git strat
      </h1>
      {msg}
      <input onChange={onChange} />
    </div>
  );
}

export default App;