import { Route, Routes, } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoute from '../../ProtectedRoute';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import JudgeDashboard from './JudgeDashboard';
import JudgeEvaluate from './JudgeEvaluate';
import JudgeProfile from './JudgeProfile';
import EvaluateConcepts from './EvaluateConcepts';
import EvaluateImpetus from './EvaluateImpetus';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Judge = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="h-full py-24">
        <Routes>
          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute path={"/auth/login"} navigate={"/judge"}/>}>
            <Route path="/" element={<JudgeDashboard />} />
            <Route path="/evaluate" element={<JudgeEvaluate />} />
            <Route path="/evaluate/impetus/:pid" element={<EvaluateImpetus />} />
            <Route path="/evaluate/concepts/:pid" element={<EvaluateConcepts />} />
            <Route path="/profile" element={<JudgeProfile />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Judge;
