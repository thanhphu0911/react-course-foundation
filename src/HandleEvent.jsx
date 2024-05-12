import React from "react";

function HandleEvent() {
  const [count, setCount] = React.useState(1);

  // click => () => {} =>   execute handleIncrement
  function handleIncrement(number) {
    // console.log('handleIncrement: ', number);
    setCount((prevState) => prevState + number + 1);
  }

  // curry function (traditional function)
  // function handleIncrement2(number) {
  //   return () => {
  //     setCount(prevState => prevState + number + 1)
  //   }
  // }
  // click ->  excute handleIncrement2
  const handleIncrement2 = (number) => () => {
    setCount((prevState) => prevState + number + 1);
  };

  return (
    <div>
      <h1>HandleEvent</h1>
      Count: {count} <br />
      <button
        type="button"
        // onClick={() => {
        //   handleIncrement(10)
        // }}
        onClick={handleIncrement2(10)}
      >
        Increment
      </button>
    </div>
  );
}

export default HandleEvent;
