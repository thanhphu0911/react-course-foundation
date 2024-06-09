import React from 'react'

const defaultColor = [
  { id: 1, title: 'red', bgColor: 'red', baseColor: 'red' },
  { id: 2, title: 'yellow', bgColor: 'yellow', baseColor: 'yellow' },
  { id: 3, title: 'aqua', bgColor: 'aqua', baseColor: 'aqua' },
  { id: 4, title: 'purple', bgColor: 'purple', baseColor: 'purple' }
] 

function TonyColorBox() {
  const [currentColor, setCurrentColor] = React.useState('')
  const [colorBoxs, setColorBoxs] = React.useState(defaultColor)

  function changeBgColor(bgColor){
    // let newBgColor = bgColor;
    // if(currentColor === bgColor) {
    //   newBgColor = ''
    // }
    // setCurrentColor(newBgColor)

    // setCurrentColor(currentColor === bgColor ? '' : bgColor)
    setCurrentColor(prevState => prevState === bgColor ? '' : bgColor)
  }

  React.useEffect(() => {
    if(!currentColor) {
      setColorBoxs(defaultColor)
      return
    };
    setColorBoxs(prevState => {
      return prevState.map(colorItem => ({
        ...colorItem, // copy all properties for object
        bgColor: currentColor
      }))
    })
  },[currentColor])

  return (
    <div>
      <h1>Challenge: Tony Color Box</h1>
      <div>Current Color: {currentColor}</div>
      <div className="tonyBoxColor">
        {colorBoxs.map(box => (
          <div
            key={box.id} 
            style={{ backgroundColor: box.bgColor }}
            onClick={() => changeBgColor(box.baseColor)}
          >
            {box.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TonyColorBox