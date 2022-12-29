import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import List from './Pages/List';
import Registration from './Pages/Registration';
import Details from './Pages/Details';
import Edit from './Pages/Edit';

function App() {
  return (
    <BrowserRouter>

      <header className="App-header">
        <Link to="/">List</Link>
        <Link to="/registration">Registrering</Link>
      </header>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit/>} />

      </Routes>
    </BrowserRouter >
  );
}

export default App;
