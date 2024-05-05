import React from 'react';
import Typography from './components/Typography';

/* when is component re-render
- state change
- props change
- parent re-render
- forceUpdate (key change)
*/

const StatelessComponent = () => {
  console.log('StatelessComponent render')
  return (
    <div>this is stateless component</div>
  )
}

const StateFullComponent = ({ name = 'Default' }) => {
  const [firstName, setFirstName] = React.useState('tony')

  console.log('StateFullComponent render')
  return (
    <div>this is statefull component: {firstName} - {name} </div>
  )
}

const Component = () => {
  const [time, setTime] = React.useState(Date.now())

  console.log('Component render')

  return (
    <div>
      <h1>Component</h1>
      <button type="button" onClick={() => setTime(Date.now())}>
        Test component re-render {time}
      </button>
      <Typography 
        text="this is typo component"
        color="#f00"
      />


      <h3>Stateless component</h3>
      <StatelessComponent key={time} />
      <Typography 
        text="this is test stateless"
      />

      <h3>Statefull component</h3>
      <StateFullComponent name={time} />
    </div>
  )
}

export default Component