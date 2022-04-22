import {FC} from 'react'

interface TodoItemProps {
    item: {
        value: string,
        id: number
    }
     
  }

  
  
  export const TodoItem: FC<TodoItemProps> = ({item}) => {

    const {value} = item
    
    if(!value) {
    
        return <></>
    }

    return (
      <div  className="note">
        {value || ""}
      </div>
    );
  };