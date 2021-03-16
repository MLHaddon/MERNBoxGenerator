import './App.css';
import BoxForm from './components/BoxForm';
import Box from './components/BoxCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const init = {
    color: "",
    height: 0,
    width: 0
  };

  const [boxes, setBoxes] = useState([]);
  const [form, setForm] = useState(init);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxes(oldBoxes => [...oldBoxes, form]);
    setForm(init);
  };

  const handleDeleteBox = (idx) => {
    setBoxes(oldBoxes => [...oldBoxes.slice(0,idx),...oldBoxes.slice(idx + 1)])
  };

  return (
    <div className="App">
        <BoxForm 
          inputs={form}
          handleFormSubmit={handleSubmit}
          handleInputChange={handleChange}
        />
      <div className="d-flex flex-wrap justify-content-evenly">
        {
          boxes.map((b,i) => <Box 
                                backgroundColor={b.color}
                                height={`${b.height}px`}
                                width={`${b.width}px`}
                                key={i}
                                idx={i}
                                handleDestroyBox={handleDeleteBox}
                              />)
        }
      </div>
    </div>
  );
}
export default App;
