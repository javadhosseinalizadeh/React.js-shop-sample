import './App.css';
import Container from './views/container/container'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>  
      <div className="App">
      <Container />
      </div>
    </BrowserRouter>

  );
}

export default App;
