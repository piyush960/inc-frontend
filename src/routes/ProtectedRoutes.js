import Auth from '../pages/auth';

function ProtectedRoutes({ children }) {
    var user = true
    return (
        user ? children : <Auth />
    );
}

export default ProtectedRoutes;
