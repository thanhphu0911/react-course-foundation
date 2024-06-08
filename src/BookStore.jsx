import React from 'react'
import BookList from './components/book/BookList'
import BookCount from './components/book/BookCount'
import BookForm from './components/book/BookForm'

function BookStore() {
  return (
    <div>
      <h2>Demo useContext api</h2>

      <BookCount />
      <BookForm />
      <BookList />
    </div>
  )
}

export default BookStore