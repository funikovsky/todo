import { FC} from 'react'

interface TodoItemProps {
    item: {
        value: string,
        id: number,
        isReady: boolean
    },

    dellTodo: (id: number) => void,
    onToggleDone: (id: number) => void

}

export const TodoItem: FC<TodoItemProps> = ({ item, dellTodo, onToggleDone }) => {

    

    const { value, id, isReady } = item;

    let classNames = "note";

    if (isReady) {
        classNames += " note-done";
        
        
    }


    return (
        <div className={classNames}>
            {value || ""}
            <div className="btn-group">

                <button className='btn-done'
                    onClick={() => onToggleDone(id)}
                >Выполнено
                </button>

                <button className='btn-dell'
                    onClick={() => dellTodo(id)}
                >Удалить
                </button>
            </div>
        </div>
    );
};