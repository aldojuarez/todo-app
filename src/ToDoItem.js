// function ToDoItem(props) {    
//     return <li> {props.text} </li>
// }
const ToDoItem = props => <li className={`${props.completed?'finished':' '}`}> {props.text} </li>
export default ToDoItem;