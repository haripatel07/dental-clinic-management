import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PublicRoutes from './components/PublicRoutes';
import Homepage from './pages/Homepage';
import Appointment from './pages/Appointment';
import AdminLogin from './pages/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import DentalDiseaseClass from './pages/DentalDiseaseClass';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <>
    <BrowserRouter>
    {loading ? <Spinner /> :
    <Routes>
      <Route path = '/' element = {<PublicRoutes><Homepage /></PublicRoutes>} />
      <Route path = '/appointment' element = {<PublicRoutes><Appointment /></PublicRoutes>} />
      <Route path = '/adminlogin' element = {<PublicRoutes><AdminLogin/></PublicRoutes>} />
      <Route path = '/dashboard' element = {<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path = '/dentaldisease' element = {<PublicRoutes><DentalDiseaseClass /></PublicRoutes>} />
    </Routes>
    }
    </BrowserRouter>
    </>
  );
}

export default App;
