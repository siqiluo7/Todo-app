import React from 'react';
import { tsConstructorType } from '@babel/types';
import TodoList from './TodoList';
import Todo from './Todo';
import './App.scss';

function App() {
  
  return (
   <div className="Panel">
     <TodoList />
   </div>
  );
}

export default App;
