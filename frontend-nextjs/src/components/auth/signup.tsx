'use client';

import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import { BiCheck, BiLock, BiUser } from 'react-icons/bi';
import Button from '../ui/form/button';
import FormControl from '../ui/form/control';
import Input from '../ui/form/input';
import Icon from '../ui/media/icon';
import { useCallback, useState } from 'react';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'text') {
      setName(e.target.value);
    } else if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }, []);

  return (
    <>
      <FormControl className="flex h-12 items-center space-x-3 rounded-lg bg-gray-100 ps-4 pe-4">
        <Icon as={BiUser} className="text-2xl text-gray-400" />
        <Input
          name="name"
          type="text"
          placeholder="Full name"
          variant="unstyled"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl className="flex h-12 items-center space-x-3 rounded-lg bg-gray-100 ps-4 pe-4">
        <Icon
          as={BiCheck}
          className="rounded-lg border-2 border-current text-2xl text-gray-400"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          variant="unstyled"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl className="flex h-12 items-center space-x-3 rounded-lg bg-gray-100 ps-4 pe-4">
        <Icon as={BiLock} className="text-2xl text-gray-400" />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          variant="unstyled"
          onChange={handleChange}
        />
      </FormControl>
      <Button
        className="self-center ps-0 pe-0 text-purple-400 active:text-purple-700"
        variant="link"
      >
        Forgot password
      </Button>
      <Button
        className="h-12 bg-purple-500 text-white hover:bg-purple-600 active:bg-purple-700"
        as={RegisterLink}
        authUrlParams={{
          connection_id:
            process.env.NEXT_PUBLIC_KINDE_CLIENT_CONNECTION_PASSWORDLESS ?? '',
          login_hint: `${email}`,
        }}
      >
        Log in
      </Button>
    </>
  );
}
