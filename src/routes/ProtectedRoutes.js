import { Navigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
    var user = false

    return (
        user ? children : <Navigate to='/auth' />
    );
}

export default ProtectedRoutes;