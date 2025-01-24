import { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import FormButton from '../forms/FormButton';


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className='w-full h-full py-24'>
      <div className="bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 w-full max-w-7xl mx-auto p-px">
        <form
          className="w-full h-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 gap-8"
          onSubmit={handleAdminSubmit}
        >
          <h2 className="text-xl font-bold text-white-100">Login In to Continue...</h2>
          
          <div>
            <Label htmlFor="username" required>Username</Label>
            <Input
              name="username"
              id="username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              placeholder="Enter  username"
            />
          </div>

          <div>
            <Label htmlFor="password" required>Password</Label>
            <Input
              id="password"
              name="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
            />
          </div>

          <FormButton loading={false} className={``} />
        </form>
      </div>
    </section>
  )
}

export default AdminLogin