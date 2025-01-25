import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import ProtectedRoute from '../../ProtectedRoute';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useLazyProcessVerifyQuery } from '../../app/services/authAPI';
import { toast } from 'react-toastify';
import { setLogin } from '../../app/features/auth/authSlice';
import Loader from '../ui/Loader';
import AdminDashboard from './AdminDashboard';

const AdminVerify = lazy(() => import("./AdminVerify"));
const AdminRegistrations = lazy(() => import("./AdminRegistrations"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Admin = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [isVerifying, setIsVerifying] = useState(true);
  const dispatch = useDispatch();
  const [ processVeriy, { isFetching } ] = useLazyProcessVerifyQuery();
  const navigate = useNavigate();

  const verifyAdmin = async () => {
    try {
      if(!isAuthenticated){
        console.log('verifying admin...')
        const data = await processVeriy().unwrap();
        dispatch(setLogin({ username: data.username, roles: data.roles, isAuthenticated: true }));
        toast.success("Admin Verified.")
        navigate('/admin')
      }
    } catch (error) {
      console.log(error);
      toast.info(error?.data?.message || error?.message || 'Login to Proceed.');
    }
    finally {
      setIsVerifying(false);
    }
  }

  useEffect(() => {
    verifyAdmin();
  }, []);

  if(isVerifying || isFetching){
    return (
      <div className="fixed inset-0 z-50 backdrop-blur-sm">
        <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col items-center gap-8">
          <Loader size={150} />
          <h2 className="sm:text-2xl text-white text-center">Verifying Admin...</h2>
        </div>
      </div>
    )
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="h-full py-24">
        <Routes>
          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} path={"/admin/login"} />}>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/verify/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminVerify /></Suspense>} />
            <Route path="/registrations/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminRegistrations /></Suspense>} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Admin;
