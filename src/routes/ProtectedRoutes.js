import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ children }) {
    const authNavigator = useNavigate()
    var user = true

    return (
        user ? children : authNavigator('/auth')
    );
}

export default ProtectedRoutes;