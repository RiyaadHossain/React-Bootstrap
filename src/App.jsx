import { Button } from 'react-bootstrap';
import './App.css';
import Buttons from './Components/Buttons/Buttons';

function App() {
  return (
    <div className="App">
      <h1 className='my-5'>Hello React Bootstrap</h1>
      <Button className='my-3' variant="primary">Primary</Button>
      <Buttons/>
    </div>
  );
}

export default App;
