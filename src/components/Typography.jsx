import React from 'react'

function Typography({ text, color = '#000', fontSize = 16 }) {
  return (
    <div
     style={{
      color,
      fontSize
     }}
    >
      {text}
    </div>
  )
}

export default Typography