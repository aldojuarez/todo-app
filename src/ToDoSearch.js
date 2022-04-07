const ToDoSearch = () =>{
    const onChangeTextSearch = (event) =>{
        console.log(event.target.value);
    }
    
    return (
        <input 
            placeholder="buscar"
            onChange={onChangeTextSearch}
        />
    )
}



export default ToDoSearch;
