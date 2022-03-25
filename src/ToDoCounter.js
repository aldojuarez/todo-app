import ToDoSearch from './ToDoSearch';
import ToDoButton from './ToDoButton';

const ToDoCounter = () => (
    <div className="header">
        <h2>Tareas completadas: 1 de 3</h2>
        <ToDoSearch/>
        <ToDoButton/>
    </div>
)
export default ToDoCounter;