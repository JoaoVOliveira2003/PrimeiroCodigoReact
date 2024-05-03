import {TaskList} from "./componentes/TaskList";
import {Footer} from "./componentes/Footer";
import { AddTask} from './componentes/AddTask';
import {useState } from "react";
import './App.css';
import React from "react";

function App() {
  
  const [tasks, setTasks] = useState([
    { id: 2003, nome: "Completar o App", completed: true }
  ]);

  return (
    <div className='App'>
    <main>
    < AddTask tasks={tasks} setTasks={setTasks}/>
    <TaskList tasks={tasks} setTasks={setTasks}/>
    
    </main>
    <Footer/>
    </div>
  );
}

export default App;
