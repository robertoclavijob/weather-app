import './App.css';
import WeeklyForecast from './components/weekly-forecast';
import AddressSearch from './components/address-search/AddressSearch';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <AddressSearch></AddressSearch>
      <WeeklyForecast></WeeklyForecast>
    </div>
  );
}

export default App;
