'use client';

import { RootState } from '@/store/store';
import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { getUserInfo } from './utils/utils';
import { login } from '@/store/slice';
import Link from 'next/link';

const ShowGoodDeeds = React.lazy(
  () => import('./components/GoodDeeds/ShowGoodDeeds')
);

export default function Home() {
  const auth = useSelector((state: RootState) => state.user.isAuth);
  const user = useSelector((state: RootState) => state.user.user);
  const token = Cookies.get('token');

  const dispatcher = useDispatch();

  const getUserByToken = async () => {
    const user = await fetch(`http://localhost:3000/auth/profile`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((r) => r.json())
      .then((data) => getUserInfo(data.username));

    dispatcher(login(user));
  };

  if (token) {
    getUserByToken();
  }

  return (
    <div className="flex flex-col items-center h-full py-2 w-full">
      {auth ? (
        <div className="flex flex-col items-center h-full w-full gap-2">
          <h1>Ваши добрые дела</h1>
          <Link
            href={'/createGoodDeed'}
            className="border border-black rounded-lg bg-green-200 px-2 py-1"
          >
            Создать новое доброе дело
          </Link>
          <Suspense fallback={<div>Loading..</div>}>
            <ShowGoodDeeds id={user!.id} canEdit={true} />
          </Suspense>
        </div>
      ) : (
        <div>Чтобы просматривать список добрых дел, войдите в систему</div>
      )}
    </div>
  );
}
