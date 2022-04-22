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

  const onToggleDone = (id: number) => {
    setNotes(prev => prev.map(item => {
      if(item.id === id) {
        return {...item, isReady : !item.isReady}
      }
      return item
    }))
  }


  const readyNotes = notes.filter(item => item.isReady === true)
  const notReadyNotes = notes.filter(item => item.isReady !==true)
  const visibleNotes = [...notReadyNotes, ...readyNotes]

  return (
    <>
      <div className="header">TODO LIST: {notes.length} notes</div>
      <div className="container">

        <AddTodo addTodo={addTodo} />
        <TodoList list={visibleNotes} dellTodo={dellTodo} onToggleDone={onToggleDone}/>

      </div>
    </>
  );
};

export default App;