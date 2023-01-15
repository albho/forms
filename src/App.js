import React from 'react';
import './App.css';

// Components
import Button, { ButtonVariant } from './components/button.tsx';

function App() {
  return (
    <div className="App">
      <Button
        variant={ButtonVariant.BLUE}
        onClick={() => console.log('Submitted')}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
