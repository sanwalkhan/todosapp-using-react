import React from 'react'

export const Todoitems = ({todo , onDelete}) => {
    return (
        <>      
        <div className="todoitems container text-center">
            {/* <h6>{todo.i}</h6> */}
        <div className="container text-center my-3">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <hr/>
        </div>
        <div className="container text-center my-3">
            <button className="btn btn-sm btn-danger"  onClick = {() => {onDelete(todo)} } > 
        Delete
        </button></div>
        </div>
        
    </>

    )
}


