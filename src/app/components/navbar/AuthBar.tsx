'use client';

import { logout } from '@/store/slice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

export default function AuthBar() {
  const dispatcher = useDispatch();

  const handleLogOut = () => {
    dispatcher(logout());
    Cookies.remove('token');
  };

  return (
    <div className="flex flex-row h-20 w-full px-4 justify-between items-center border-b border-black">
      <div className="flex flex-row gap-4">
        <Link href={'/'}>На главную</Link>
        <Link href={'/friends'}>Друзья</Link>
      </div>

      <div className="flex flex-row gap-4">
        <Link href={'/profile'} className="cursor-pointer">
          Профиль
        </Link>
        <Link href={'/login'} onClick={handleLogOut} className="cursor-pointer">
          Выйти
        </Link>
      </div>
    </div>
  );
}
