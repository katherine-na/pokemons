import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Dropdown from './components/Dropdown/Dropdown';

const App: React.FC = () => {
  return (
    <div className="container-app">
      <NavigationBar />
      <Dropdown />
    </div>
  );
};

export default App;
