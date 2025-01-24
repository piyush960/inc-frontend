import { Navigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminDashboard from './AdminDashboard';
import AdminVerify from './AdminVerify';
import AdminRegistrations from './AdminRegistrations';
import ProtectedRoute from '../../ProtectedRoute';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    // const authStatus = localStorage.getItem('authToken'); // Example check
    // const role = localStorage.getItem('userRole'); // Example role check
    // if (authStatus && role) {
    //   setIsAuthenticated(true);
    //   setUserRole(role);
    // }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='h-full py-24'>
        <Routes>
          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} path={"/admin/login"} />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/verify/:event_name" element={<AdminVerify />} />
            <Route path="/registrations/:event_name" element={<AdminRegistrations />} />
          </Route>

          {/* Public Route for Login */}
          <Route path="*" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Admin;
