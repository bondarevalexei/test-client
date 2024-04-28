'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getUserInfo, signIn } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/slice';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { RootState } from '@reduxjs/toolkit/query';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLoginBtnCLick = async () => {
    const sign = await signIn(email, password);

    if (sign.res.access_token !== undefined) {
      const user = await getUserInfo(email);
      dispatch(login(user));

      Cookies.set('token', sign.res.access_token, { expires: 7 });
      router.push('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-2">
      <input
        type="email"
        placeholder="email"
        className="border border-black w-80 px-2 py-1 rounded-lg"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        className="border border-black w-80 px-2 py-1 rounded-lg"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-row gap-4">
        <button
          className="w-32 border border-black rounded-lg"
          onClick={handleLoginBtnCLick}
        >
          Войти
        </button>
        <Link
          href={'/register'}
          className="w-32 border border-black rounded-lg text-center cursor-pointer"
        >
          Регистрация
        </Link>
      </div>
    </div>
  );
}
