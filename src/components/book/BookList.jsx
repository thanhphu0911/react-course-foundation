import React from 'react'

import { useBookContext } from '../../context/BookContext'

function BookList() {
  const { books } = useBookContext();
  return (
    <div>
      Book List: <br />
      {books.map(book => (
        <div key={book.id}>Title: {book.title}</div>
      ))}

    </div>
  )
}

export default BookList