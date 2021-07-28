import { Todoitems } from './Todoitems' 
import React from 'react'

export const Todos = (props) => {
    return (
        <div id="container">
          <h3 className="text-center my-3"> Todo LIST </h3>
          {props.todos.map((todo)=>{
              return <Todoitems todo = {todo} onDelete = {props.onDelete} />
          })}
        </div>
    )
}
