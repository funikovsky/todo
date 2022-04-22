import { useState } from 'react';
import '../SCSS/App.scss';
import { AddTodo } from './todo/add-todo';
import { TodoList } from './todo/todo-list'


interface Item {
  value: string,
  id: number,
  isReady: boolean

}



function App() {

  const [notes, setNotes] = useState<Array<Item>>([]);

  const addTodo = (value: string) => {

    const newItem: Item = {
      value: value,
      id: Date.now(),
      isReady: false

    }

    setNotes(prev => [...prev, newItem])

  }

  const dellTodo = (id: number) => {

    setNotes(prev => prev.filter(item => item.id !== id))

    
  }

  return (
    <>
      <div className="header">TODO LIST</div>
      <div className="container">

        <AddTodo addTodo={addTodo} />
        <TodoList list={notes} dellTodo={dellTodo} />

      </div>
    </>
  );
};

export default App;