import React from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer';
import TaskListContainer from './components/TaskListContainer';

/**
 * - nomenclatura das funções
 * - reutilização dos componentes (Container, Form, etc)
 * - subir o estado da aplicação (source of truth)
 * - HOC's
 * - menos é mais
 * - clean code
 * - tipagem (TS ou propTypes)
 */
function App() {
  const [tasks, setTasks] = React.useState([]);

  const savedTask = (task) => {
    setTasks((prev) => {
      return [...prev, task];
    });
  };

  return (
    <div>
      <TaskContainer onSavedTask={savedTask} />
      <TaskListContainer taskList={tasks} />
    </div>
  );
}

export default App;
