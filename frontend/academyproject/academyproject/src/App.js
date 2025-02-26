import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import StudentDetails from './component/StudentDetails';
import StudentView from './component/StudentView';
import Login from './component/Login';
import Signup from './component/SignUp';
import StaffDetails from './component/StaffDetails';
import StaffPages from'./component/StaffPages';
import { AuthProvider } from './component/Auth';
import Home from './component/Home';
import About from './component/About';
import CGPA from './component/CGPA';
import Edit from './component/Edit';


function App() {
  return (
  <AuthProvider>
    <Router> 
      <div className="App">
        <NavBar /> 
        <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/about"element={<About/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-details" element={<StudentDetails />} />




        
<Route path="/staffpages"element={<StaffPages/>}/>

        <Route path="/staffdetail" element={<StaffDetails/>}/>
          <Route path="/signup/:pid" element={<StaffDetails/>}/>
          {/* <Route path="/student-view" element={<StudentView />} />*/}
        <Route path="/edit/:sid" element={<Edit/>} /> 

          <Route path="/student-view" element={<StudentView/>} />
        
          <Route path="/cgpa"element={<CGPA/>}/>
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
