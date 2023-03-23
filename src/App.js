import './App.css';
import Home from './components/Home';
import React  from 'react';
import DataProvider from './context/DataProvider';
function App() {
  return (
    <div className="App">
      <DataProvider>
         <Home/>
      </DataProvider>
    </div>
  );
}

export default App;