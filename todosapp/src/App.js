
import './App.css';

import { Header } from './components/Header';

import { Todos } from './components/Todos';




function App() {

  const onDelete = () =>{
    console.log("im on delete")
  }

  const todos = [
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

  return (
    <>
  <Header title = {'TODO LIST'}  searchbar = {false}/>

  <Todos todos = {todos}  onDelete = {onDelete}/>

    </>
  )
}

export default App;
