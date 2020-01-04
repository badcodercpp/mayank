import React from 'react';
import Router from './router';
import config from './router/config';

function App() {
  console.log(config())
  const data = config();

  return (
    <div className="App">
      <Router routes={data} />
    </div>
  );
}

export default App;
