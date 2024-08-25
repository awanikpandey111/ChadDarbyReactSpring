import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoRowItem from './components/TodoRowItem';
import TodoTable from './components/TodoTable.js'
import { Component, useState } from 'react';
import NewTodoForm from './components/NewTodoForm.js';

function App() {

  const [todos,setTodos]=useState([
    {rowNumber:1, rowDescription:'Feed Puppy', rowAssigned:'User One'},
    {rowNumber:2, rowDescription:"Water Plants", rowAssigned:'User Two'},
    {rowNumber:3, rowDescription:'Make Dinner', rowAssigned:'User Three'},
    {rowNumber:4, rowDescription:'Make Lunch', rowAssigned:'User four'}
  ])

  const addTodo=(description,assigned)=>{
    let rowNumber=0;
    if(todos.length > 0){
      rowNumber=todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber=1;
    }
      const newTodo={
        rowNumber:rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      // todos.push(newTodo);this will not rerender
      setTodos(todos=>[...todos,newTodo])
      console.log(todos);
    }
    const deleteTodo=(deleteTodoRowNumber)=>{
        let filtered=todos.filter(function(value){
          return value.rowNumber!=deleteTodoRowNumber
        })
        setTodos(filtered);
    }
  
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
            Your todos
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' >Add New Todo</button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
        </div>
    </div>
  );
}

export default App;
