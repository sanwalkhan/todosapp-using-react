import React , {useState} from "react";

export const Addtodo = (props) => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){ 
        alert ("Title or Desription can't be Empty")
        }
        else {
        props.addTodo(title,desc);

        setTitle('');
        setDesc('');
        } 
  }
  return (
    <div className="container ">
        <h3 className="text-center">Add Your Task</h3>
      <form onSubmit ={submit} >
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            value = {title}
            onChange = {(e) => 
                setTitle(e.target.value)
            }
            className="form-control"
            id="title"
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            value = {desc}
            onChange = {(e) => 
                setDesc(e.target.value)
            }
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
