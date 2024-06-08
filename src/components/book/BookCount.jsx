import React from 'react'

import { useBookContext } from '../../context/BookContext'

function BookCount() {
  const { lengthBook } = useBookContext();
  return (
    <div>BookCount: {lengthBook}</div>
  )
}

export default BookCount