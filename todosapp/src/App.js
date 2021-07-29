import React, { useState } from 'react';

import './App.css';

import { Header } from './components/Header';

import { Todos } from './components/Todos';

import { Footer } from './components/footer';

import { Addtodo } from './components/Addtodo';



function App() {

  const onDelete = (todo) =>{
    settodos(todos.filter((e)=>{
      return e!== todo
    }))
  }

  const addtodo = ( title , desc)=>{
    let sno = todos[todos.length-1].sno +1 ;
    let mytodo = {
      sno : sno, 
      title : title,
      desc : desc,
    }
    settodos([...todos, mytodo]);
  }

const [todos, settodos] = useState(
  [
    {
      sno: 1,
      title: "Buy Phone",
      desc: 'Apple Phone Phone from markets Apple Store'
  },
  {
      sno: 2,
      title: "Fuel",
      desc: 'Go to the Fuel Station'
  }
  ,
  {
      sno: 3,
      title: "Grocerry",
      desc: 'Go to the market and buy  Grocery'
  }
  ]
)
 
  return (
    <>
  <Header title = {'TODO LIST'}  searchbar = {false}/>

  <Addtodo addtodo = {addtodo}/>

  <Todos todos = {todos}  onDelete = {onDelete}/>


  <Footer />
    </>
  )
}

export default App;