import React, { useRef } from 'react';
import isFunction from '../utils/isFunction';
import TodoItem from './TodoItem';

export default function TodoList({ todos = [], onComplete }) {
 const id = useRef(-1);

 return (
  <div>
   {
    todos.length > 0
     ? (
      <ol>
       {todos.map((todo, index) => {
        id.current += 1;
        return (
         <li key={id.current}>
          <TodoItem
           onComplete={() => {
            if (isFunction(onComplete)) {
             onComplete(index);
            }
           }}
          >
           {todo}
          </TodoItem>
         </li>
        );
       })}
      </ol>
     )
     : <p>할 일이 없어요!</p>
   }
  </div>
 );
}