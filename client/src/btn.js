import React from 'react';

const FunctionalComponent = () => {
    const [count, setCount] = React.useState(0);
  
    return (
      <div className='App'>
        <p>count: { count }</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
    );
  };

  export default FunctionalComponent