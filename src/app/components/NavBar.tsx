'use client';

import { RootState } from '@/store/store';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import AuthBar from './navbar/AuthBar';
import NotAuthBar from './navbar/NotAuthBar';

export default function NavBar() {
  const auth = useSelector((state: RootState) => state.user.isAuth);

  return auth ? <AuthBar /> : <NotAuthBar />;
}
