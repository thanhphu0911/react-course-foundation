import React from 'react'
import BasicButton from '../BasicButton';

function Todos({ increment }) {
  console.log('Todos render');
  return (
    <div>
      Todos
      <BasicButton 
        text='Test useCallback' 
        onClick={increment} 
      />

    </div>
  )
}

export default React.memo(Todos)