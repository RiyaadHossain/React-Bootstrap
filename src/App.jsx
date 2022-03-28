import { Button } from 'react-bootstrap';
import './App.css';
import Buttons from './Components/Buttons/Buttons';
import Cards from './Components/Card Group/Cards';

function App() {
  return (
    <div className="Ap container">
      <h1 className='my-5'>Hello React Bootstrap</h1>
      <Button className='my-3' variant="primary">Primary</Button>
      <Buttons />
      <Cards/>
    </div>
  );
}

export default App;
