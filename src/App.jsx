import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from './components/Authentication/LoginPage';
import Register from './components/Authentication/RegisterPage';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
    </Routes>
   </Router>
  )
}

export default App