import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Form from './Components/Form/Form';
import Card from './Components/Card/Card';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/card' element={<Card/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
