import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Buttons, FormsBanner, InputBox, toast } from '../components';
import { useLoginAdmin } from '../hooks/admin.hooks';
import './styles/auth.css';

const initialErrors = {
    username: '',
    password: '',
}

function Auth() {
    const [errors, setErrors] = useState(initialErrors)
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const adminLoginMutation = useLoginAdmin(setErrors)
    const loginNavigator = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        adminLoginMutation.mutate({ username: usernameRef.current.value, password: passwordRef.current.value }, {
            onSuccess: () => {
                setErrors(initialErrors)
                toast.success('Login Successful', { icon: '👍' })
                loginNavigator(-1)
                return
            }
        })
    }

    return (
        <>
            <FormsBanner eventName='Admin Login' eventDescription='Login with credentials provided with specific admin role' />
            <form onSubmit={handleSubmit} className='shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center mx-5 my-6 md:mx-20 p-4 md:p-8 border border-light_blue'>
                <InputBox label='Username' type='text' name='username' placeholder='Enter Username' inputref={usernameRef} error={errors.username} required />
                <InputBox label='Password' type='password' name='password' placeholder='Enter Password' inputref={passwordRef} error={errors.password} required />
                <Buttons type='submit' value='Login' className='mt-3' loading={adminLoginMutation.isLoading} />
            </form>
        </>
    );
}

export default Auth;