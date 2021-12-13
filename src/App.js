import './App.css';
import Box from './components';
import Goku from './images/goku.png';
import Vegeta from './images/vegeta.png';

function App() {
  return (
    <div className="App">
      <h1>Some Characters from Dragon Ball</h1>
      <div className='container'>
        <Box><img src={Goku} alt='goku' id='Goku'/></Box>
        <Box><img src={Vegeta} alt='Vegeta' id='Vegeta'/></Box>
        
      </div>

    </div>
  );
}

export default App;
