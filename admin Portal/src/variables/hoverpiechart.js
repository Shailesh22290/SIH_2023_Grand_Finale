import 'src/components/Charts/.hover-text-box.css';
import React from 'react';
import HoverTextBox from 'src/variables/charts.js';

const App = () => {
  return (
    <div>
      <h1>React Hover Text Box Example</h1>
      <HoverTextBox text="This is a tooltip">
        <button>Hover me</button>
      </HoverTextBox>
    </div>
  );
};

export default App;

