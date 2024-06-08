import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from './components/Authentication/LoginPage';
import Register from './components/Authentication/RegisterPage';
import Dashboard from './components/Dashboard/Dashboard';
import BasicTable from './components/UserDatas/BasicTable';
import JobUpdates from './components/Dashboard/JobUpdates';
import UserData from './components/UserDatas/UserData';

function App() {

  return (
   <Router>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
      <Route path='/user-data' element={<UserData></UserData>} ></Route>
    </Routes>
   </Router>
  )
}

export default App
