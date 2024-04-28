'use client';

import { useState } from 'react';
import { CreateUser } from '@/entity/User';
import { createUser } from '../utils/utils';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [pass, setPass] = useState('');
  const [repPass, setRepPass] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const router = useRouter();

  const handleRegisterBtnClick = async () => {
    if (repPass === pass) {
      const user: CreateUser = {
        name: name,
        password: pass,
        email: email,
        tag: tag,
        friends: [],
      };

      const retUser = await createUser(user);
      router.push('/login');
    } else {
      setErrMsg('Неверно введены пароли');
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите почту"
        className="border border-black px-2 py-1"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
        className="border border-black px-2 py-1"
      />
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Введите тэг"
        className="border border-black px-2 py-1"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Введите пароь"
        className="border border-black px-2 py-1"
      />
      <input
        type="password"
        value={repPass}
        onChange={(e) => setRepPass(e.target.value)}
        placeholder="Повторите пароь"
        className="border border-black px-2 py-1"
      />
      <button
        onClick={handleRegisterBtnClick}
        className="border border-black px-2 py-1"
      >
        Зарегистрироваться
      </button>
    </div>
  );
}
