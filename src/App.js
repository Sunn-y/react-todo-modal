import { useState } from 'react';
import Todo from './components/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [nextId, setNextId] = useState(1);

  const onChangeHandler = ({ target }) => {
    setTodo(target.value);
  };

  const addTodo = () => {
    setTodos(todos.concat([{ id: nextId, text: todo }]));
    setNextId(nextId + 1);
  };

  const deleteTodo = (targetId) => {
    setTodos(todos.filter(({ id }) => id !== targetId));
  };

  return (
    <div>
      <h1>My Todos</h1>
      <input type='text' onChange={onChangeHandler} />
      <button className='btn' onClick={addTodo}>
        ADD
      </button>
      {todos.map(({ id, text }) => (
        <Todo key={id} id={id} text={text} onDelete={deleteTodo} />
      ))}
    </div>
  );
}
