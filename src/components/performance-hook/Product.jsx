import React from 'react'

function Product({ movie }) {
  console.log('Product render: ', movie.title);

  return (
    <div>
      <div>Product</div>
      Title movie: {movie.title}
    </div>
  )
}

export default React.memo(Product, customEqual)

function customEqual(prevProps, nextProps) {
  console.log('custom equal: ',  {
    prevProps, nextProps
  })
  return prevProps.movie.title === nextProps.movie.title
}