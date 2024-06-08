import React from "react";

const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = React.useState([]);
  const lengthBook = books.length;

  function addBook(title) {
    const bookItem = {
      id: Date.now(),
      title: `${title} ${Date.now()}`
    }
    setBooks(prevState => ([...prevState, bookItem]));
  }

  return (
    <BookContext.Provider
      value={{
        books,
        lengthBook,
        addBook
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => React.useContext(BookContext);