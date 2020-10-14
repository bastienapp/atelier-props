import React from 'react';
import Avatar from './components/Avatar';

function App() {
  const bart = {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  };
  const cletus = {
    image: "https://www.generatormix.com/images/simpsons/cletus-spuckler-.jpg",
    firstName: "Cletus",
    lastName: "Spuckler"
  };
  const krusty = {
    image: "https://www.generatormix.com/images/simpsons/krusty-the-clown.jpg",
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
