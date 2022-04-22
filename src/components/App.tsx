import { useState } from 'react';
import '../SCSS/App.scss';
import { AddTodo } from './todo/add-todo';
import { TodoList } from './todo/todo-list'


interface Item {
  value: string,
  id: number

}



function App() {

  const [notes, setNotes] = useState<Array<object>>([]);

  const addTodo = (value: string) => {

    const newItem: Item = {
      value: value,
      id: Date.now()
    }



    setNotes(prev => [...prev, newItem])

  }

  return (
    <>
      <div className="header">TODO LIST</div>
      <div className="container">

        <AddTodo addTodo={addTodo} />
        <TodoList list={notes}/>

      </div>
    </>
  );
};

export default App;