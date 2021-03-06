import {FC} from 'react';
import {TodoItem} from './todo-item';


interface TodoListProps {

        list: Array<any>,
        dellTodo: (id: number) => void,
        onToggleDone:  (id: number) => void
        

}

export const TodoList: FC<TodoListProps> = ({list, dellTodo, onToggleDone}) => {

    return (
        <>
        {list.map(item => (
            <TodoItem item={item} 
                      key={item.id} 
                      dellTodo={dellTodo} 
                      onToggleDone={onToggleDone}
            />
        ))}
        

        </>
    )
}