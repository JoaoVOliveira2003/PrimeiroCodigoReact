export const TaskCard = ({ task, handleDelete, info, chargeColor }) => {
  return (
    <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
      <span>{task.id} - {task.nome} </span>
      <button onClick={() => handleDelete(task.id)} className='delete'>Deletar</button>
      <button onClick={() => chargeColor(task.id)} className='feito'>Mudar</button>
    </li>
  );
};
