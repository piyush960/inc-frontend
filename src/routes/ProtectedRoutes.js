import { Auth } from '../pages';

function ProtectedRoutes({ children }) {
    var user = true
    return (
        user ? { children } : <Auth />
    );
}

export default ProtectedRoutes;
