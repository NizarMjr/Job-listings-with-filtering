import { useState } from 'react';
import './App.css';
import FilterPart from './components/filterPart/FilterPart';
import ListJobPart from './components/listJobPart/ListJobPart';
import Loading from './components/loading/Loading';

function App() {
  const [time, setTime] = useState(false);
  setTimeout(() => {
    setTime(true);
  }, 2000)
  return (
    <div className="App">
      <div className='bg-header'>
        <img src='../images/bg-header-desktop.svg' alt='bg header' />
      </div>
      <FilterPart />
      {time ? <ListJobPart /> : <Loading />}

    </div>
  );
}

export default App;
