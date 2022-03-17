import { useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState('');
  const onChange = ({ target: { value }}) => {
    setMsg(value);
  }

  return (
    <div className="App">
      {msg}
      <input onChange={onChange} />
    </div>
  );
}

export default App;
