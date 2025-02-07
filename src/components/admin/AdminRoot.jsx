import { Route, Routes, } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from '../../ProtectedRoute';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AdminDashboard from './AdminDashboard';
import AdminIncomplete from './AdminIncomplete';

const AdminVerify = lazy(() => import("./AdminVerify"));
const AdminRegistrations = lazy(() => import("./AdminRegistrations"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Admin = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="h-full py-24">
        <Routes>
          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute path={"/admin/login"} />}>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/verify/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminVerify /></Suspense>} />
            <Route path="/registrations/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminRegistrations /></Suspense>} />
            <Route path="/incomplete-registrations/:event_name" element={<Suspense fallback={<p style={{textAlign: 'center', padding: '150px 0'}}>Loading...</p>}><AdminIncomplete /></Suspense>} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Admin;
