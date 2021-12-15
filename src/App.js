import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <h1>Some Characters from Dragon Ball</h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
