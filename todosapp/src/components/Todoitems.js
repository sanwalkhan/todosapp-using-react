import React from 'react'

export const Todoitems = ({todo , onDelete}) => {
    return (
        <>
        
            <h6 className="mb-6">{todo.sno }</h6>
            
        <div className="todoitems">
            
        <div className="container text-center my-3">
          
            <h4>{todo.title}</h4>
            <hr/>
            <p>{todo.desc}</p>
        </div>
        <div className="container text-center my-3"><button className="btn btn-sm btn-danger"  onClick = {() => {onDelete(todo)} } > Delete</button></div>
        </div>
    </>

    )
}
