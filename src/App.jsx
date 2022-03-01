import React from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer';
import TaskListContainer from './components/TaskListContainer';

/**
 * - nomenclatura das funções
 * - reutilização dos componentes (Container, Form, etc) - https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6
 * - subir o estado da aplicação (source of truth) - https://pt-br.reactjs.org/docs/lifting-state-up.html
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
