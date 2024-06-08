import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from './components/Authentication/LoginPage';
import Register from './components/Authentication/RegisterPage';
import Dashboard from './components/Dashboard/Dashboard';
import DI_Main from './components/Interview/DI_Main';
import DI_Interview from './components/Interview/DI_Interview';
import CVUpload from './components/CVUpload/CVUpload';
function App() {

  return (
   <Router>
    <Routes>
      {/* <Route index element={<Dashboard></Dashboard>}></Route> */}
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
      <Route path='/start-interview' element={<DI_Main></DI_Main>}></Route>
      <Route path='/interview' element={<DI_Interview></DI_Interview>}></Route>
      <Route path='/CVUpload' element={<CVUpload></CVUpload>} ></Route>
    </Routes>
   </Router>
  )
}

export default App