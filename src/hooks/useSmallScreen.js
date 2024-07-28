import React from 'react';

export const useSmallScreen = () => {
  const [isSmalScreen, setIsSmallScreen] = React.useState(false)
  const [multiple, setMultiple] = React.useState(2);

  function checkSreen() {
    setIsSmallScreen(window.innerWidth < 768);
  }

  function multipleTotal() {
    setMultiple(prevState => prevState * 2)
  }

  React.useEffect(() => {
    window.addEventListener('resize', checkSreen);
    return () => {
      window.removeEventListener('resize');
    }
  }, [])

  return {
    isSmalScreen,
    multiple,
    multipleTotal
  }
}