import React from 'react';
import logo from './logo.svg';
import './App.css';
import Romcal from 'romcal'


const romcal = new Romcal({scope: 'liturgical'})
      // const romcal = new Romcal()

      console.log(Romcal.getVersion())

      romcal.generateCalendar(2022).then((data1) => {
        console.log('2022-09-25', data1['2022-09-25'][0]['calendar']['weekOfSeason'])
        console.log('2022-09-26', data1['2022-09-26'][0]['calendar']['weekOfSeason'])
        console.log('2022-09-27', data1['2022-09-27'][0]['calendar']['weekOfSeason'])
        console.log('2022-09-28', data1['2022-09-28'][0]['calendar']['weekOfSeason'])
        console.log('2022-09-29', data1['2022-09-29'][0]['calendar']['weekOfSeason'])
        console.log('2022-09-30', data1['2022-09-30'][0]['calendar']['weekOfSeason'])
        console.log('2022-10-01', data1['2022-10-01'][0]['calendar']['weekOfSeason'])
      });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
