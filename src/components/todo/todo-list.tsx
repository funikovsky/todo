import {FC} from 'react';
import {TodoItem} from './todo-item';




interface TodoListProps {

        list: Array<any>,

}


export const TodoList: FC<TodoListProps> = ({list}) => {

    console.log(list)

    return (
        <>
        {list.map(item => (
            <TodoItem item={item} key={item.id}/>
        ))}

        </>
    )
}