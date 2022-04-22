import { FC } from 'react'

interface TodoItemProps {
    item: {
        value: string,
        id: number,
        isReady: boolean
    },

    dellTodo: (id: number) => void



}



export const TodoItem: FC<TodoItemProps> = ({ item, dellTodo }) => {


    const { value, id } = item


   

    return (
        <div className="note">
            {value || ""}
            <button className='btn-dell' onClick={() => dellTodo(id)}>Удалить</button>
        </div>
    );
};