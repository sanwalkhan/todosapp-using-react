import React , {useState} from "react";

export const Addtodo = ({addtodo}) => {
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){ 
        alert ("Title or Desription can't be Empty")
        addtodo(title , desc)
    }
    }
  return (
    <div className="container ">
        <h3 className="text-center">Add Your Task</h3>
      <form onSubmit ={submit} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            value = {title}
            onChange = {(e) => {
                settitle(e.target.value)
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value = {desc}
            onChange = {(e) => {
                setdesc(e.target.value)
            }}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button type="submit" className="btn btn-success btn-sm">
          Add Task
        </button>
      </form>
    </div>
  );
};
