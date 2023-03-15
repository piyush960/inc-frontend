import { useNavigate } from 'react-router-dom';
import { useVerifyAdmin } from '../hooks/admin.hooks';
import { toast } from '../components';

function ProtectedRoutes({ children }) {
    const { isLoading, isSuccess, isError } = useVerifyAdmin()
    const authNavigator = useNavigate()
    const toastID = toast.info('Authenticating admin login...', { autoClose: 3000, closeButton: true })

    if (isLoading) {
        toast.update(toastID, { render: 'Authenticating admin login...', type: toast.TYPE.INFO, isLoading: isLoading })
    }
    if (isSuccess) {
        toast.update(toastID, { render: 'Authentication success', type: toast.TYPE.SUCCESS, isLoading: false })
        toast.dismiss(toastID)
        return children
    }
    if (isError) {
        toast.dismiss(toastID)
        authNavigator('/auth')
        return
    }
}

export default ProtectedRoutes;