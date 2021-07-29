import { Todoitems } from './Todoitems' 
import React from 'react'

export const Todos = (props) => {
    return (
        <div className="todo">
          <h3 className="text-center my-3"> Tasks Remaining </h3>
          {props.todos.length === 0  ? 'No More Task' :  
          props.todos.map((todo)=>{
            return(
            <Todoitems todo={todo} key={todo.sno} onDelete = {props.onDelete} />
            )})} 
          
          
        </div>
    )
}
