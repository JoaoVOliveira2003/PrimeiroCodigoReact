import React, { useState } from 'react';

export const AddTask = ({ info, tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };



  const handleReset = () => {
    setTaskValue("");
  };

  const handleSubmite = (event) => {
    event.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000),
      nome: taskValue,
      completed: Boolean(progress)
    };
    
    setTasks([...tasks,task]);
    handleReset();
  };

  return (
    <div className="App">
      <section>
        <form onSubmit={handleSubmite}>
          <h1>Inserir Dados</h1>
         
          <input 
            onChange={handleChange} 
            value={taskValue} 
            type='text' 
            name='task' 
            id='task' 
            className="input-field" 
            placeholder='Nome da Atividade' 
            autoComplete='off'
          />

          <select  
            onChange={(event) => setProgress(event.target.value)} 
            value={progress} 
            className="select-field" 
          >
            <option value="true">Completo</option>
            <option value="false">Incompleto</option>
          </select>
          <button type='submit' className="submit-button">Submeter</button> 
          <button onClick={handleReset} className="submit-button">Reset</button>
        </form>

      </section>
    </div>
  );
};
