import ToDoList from './ToDoList';
import ToDoItem from './ToDoItem';
import ToDoCounter from './ToDoCounter';

import Container from '@mui/material/Container';
import './App.css';

const items = [
  { text: 'Tarea 1', completed: true },
  { text: 'Tarea 2', completed: false },
  { text: 'Tarea 3', completed: false }
];

const App = () =>
  <>
    <Container maxWidth="sm">
      <ToDoCounter />
      {/* <ToDoSearch />
      <ToDoButton /> */}
      <h3>Tareas</h3>
      <ToDoList>
        {items.map((item, index) => <ToDoItem text={item.text} completed={item.completed} key={index} />)}
      </ToDoList>
    </Container>
  </>

export default App;