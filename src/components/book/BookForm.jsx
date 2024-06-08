import React from 'react'
import BasicButton from '../BasicButton'
import { useBookContext } from '../../context/BookContext';

function BookForm() {
  const { addBook } = useBookContext();
  const [title, setTitle] = React.useState('');

  return (
    <div>
      Title:  <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> <br />
      <BasicButton 
        text="Add Book" 
        onClick={() => {
          addBook(title);
          setTitle('')
        }}
      />
    </div>
  )
}

export default BookForm