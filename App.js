import React from 'react';
import PayEmbed from './pay-modal'; // Assuming pay-modal.js exports the Example component

function App() {
  return (
    <div className="App">
      <h1>Mad Banana Pay Embed Example</h1>
      {/* Render the PayEmbed component */}
      <PayEmbed />
    </div>
  );
}

export default App;