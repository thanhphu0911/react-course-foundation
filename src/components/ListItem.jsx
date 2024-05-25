import React from 'react'
import clsx from 'clsx';
import styles from './listItem.module.css';

function ListItem({ todo, incrementScore, decrementScore }) {
  const [isClose, setIsClose] = React.useState(false);
  const isGood = todo.score > 6;

  function onClose(){
    setIsClose(prevState => !prevState)
  }

  const titleStyles = {
    textDecoration: isClose ? 'line-through' : 'auto'
  }

  return (
    <>
      <div
        style={titleStyles}
        // className={isClose ? styles.heading : styles['text-black']} // css module
        className={clsx(
          "typoraphy-h1",
          isClose ? 'text-red' : 'text-black',
          // isClose && 'text-red'
        )}
        // className={`typoraphy-h1 ${isClose ? 'text-red' : 'text-black'} `} 
      >
        Title: {todo.text}
      </div>
      <div>Student: {isGood ? 'Good' : 'Not Bad'}</div>
      <div>Score: {todo.score}</div>
      {isClose && <div>You closed this ticket.</div>}
      <div style={{ textAlign: 'right' }}>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => decrementScore(todo.id)}>Descrement</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => incrementScore(todo.id)}>Increment</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>Close</button>
      </div>
    </>
  )
}

export default ListItem