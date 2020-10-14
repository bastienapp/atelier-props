import React from 'react';
import Avatar from './components/Avatar';

function App() {
  const bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
    star: true
  };
  const cletus = {
    firstName: "Cletus",
    lastName: "Spuckler"
  };
  const krusty = {
    firstName: "Krusty",
    lastName: "The Clown"
  };

  return (
    <div className="App">
      <Avatar {...bart} />
      <Avatar {...cletus} />
      <Avatar {...krusty} />
    </div>
  );
}

export default App;
