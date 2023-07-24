import React, { useState } from 'react';
import InputField from './InputField';
import { Todo } from './Modal';
import TodoList from './TodoList';

const Home:React.FC = () => {
    const [todo, setTodo]=useState<string>("");
    const [todos, setTodos]=useState<Todo[]>([])
    const handleAdd=(e:React.FormEvent)=>{
     e.preventDefault();
     if(todo){
        setTodos([...todos, {id:Date.now(),todo, isDone:false}]);
        setTodo("");
     }
    }
    return (
        <div className='App'>
            <h1 className='heading'>Taskify</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
        </div>
    );
};

export default Home;