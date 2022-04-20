import React, { FC, useState} from 'react';
import '../SCSS/App.scss';

interface CurrentProps {
  item: string,
  
}

const Note: FC<CurrentProps> = (props) => {
  const { item, ...restProps } = props;

  return (
    <div {...restProps} className="note">
      {item || ""}
    </div>
  );
};


function App() {
  
  const [notes, setNotes] = useState<string[]>([]);
  const [noter, setNoter] = useState('')

  const addNote = () => {

    setNotes(prev => [...prev, noter].sort())
    setNoter((prev) => '')

    
  }


  const elements = notes.map((item, index) => {
    return (
      <Note item={item} key={index} />
    )
  })

   
  return (
    <>
      <div className="header">TODO LIST</div>
      <div className="container">
        
        <div className="btn" onClick={addNote}>
          +
        </div>
        <input
          type="text"
          value={noter}
          className="textInput"
          autoFocus
          onChange={(e) => setNoter((prev) => e.target.value)}
         
        />
        {       elements        }
      </div>
    </>
  );
};

export default App;