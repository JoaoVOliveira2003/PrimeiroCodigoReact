import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
//import { BoxCard } from './BoxCard';

export const TaskList = ({ info, tasks, setTasks }) => {
  const [show, setShow] = useState(true);
  
  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  function chargeColor(taskId) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; 
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  return (
    <div className='App'>
      <h1>Lista de tarefas</h1>
      <ul>
        <button className='trigger select-field' onClick={() => setShow(!show)}>
          {show ? 'Esconder' : 'Mostrar'}
        </button>
        {show && tasks.map((task) => (
          <TaskCard key={task.id}  info={info} chargeColor={chargeColor} task={task} handleDelete={handleDelete}/>
        ))}
      </ul>
      {/*
      <BoxCard result="completed">
          <p className='tittle'>lorem ipsum lorem ipsum  </p> 
          <p className='description'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </p> 
      </BoxCard>
      <BoxCard result="incomplete">
          <p className='tittle'>lorem ipsum lorem ipsum  </p> 
          <p className='description'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </p> 
      </BoxCard>    
      */}
    </div>
  );
};
