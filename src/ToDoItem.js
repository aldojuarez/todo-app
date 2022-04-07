const ToDoItem = props => {
    const onComplete = () =>{
        alert(props.text + " completada");
    }

    return (
        <li className={`${props.completed?'finished':' '}`}>
            <span className="fa fa-check Icon-check" 
                onClick={onComplete}
            ></span>
            {props.text}
            <span className="fa fa-fw fa-close Icon-delete"></span>
        </li>
    )
}


export default ToDoItem;