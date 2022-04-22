import { useState, FC } from "react"


interface AddTodoProps {

    addTodo: (value: string) => void,


}

export const AddTodo: FC<AddTodoProps> = ({ addTodo }) => {

    const [value, setValue] = useState('')

    return (
        <>
            <div className="btn" onClick={() => {

                if(!value) return

                addTodo(value)
                setValue('')

            }}
            >
                +
            </div>
            <input
                type="text"
                value={value}
                className="textInput"
                autoFocus
                onChange={(e) => setValue(e.target.value)}

            />
        </>
    )
}