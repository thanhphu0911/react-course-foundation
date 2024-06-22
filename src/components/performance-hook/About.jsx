import React from 'react'
import BasicButton from '../BasicButton';

function About({ count, increment, movie, updateMovie }) {
  console.log('About render');

  const sum = React.useMemo(() => {
    console.log('useMemo---------: ', count)
    return count * 10;
  }, [count])

  return (
    <div>
      About: {sum} <br />
      Name movie: {movie.name} <br />
      <BasicButton 
        text='increment' 
        onClick={increment} 
      />
       <BasicButton 
        text='Update name movie' 
        onClick={updateMovie} 
      />
    </div>
  )
}

export default About