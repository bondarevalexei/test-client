'use client';

import { Suspense, useState } from 'react';
import ShowGoodDeeds from '../components/GoodDeeds/ShowGoodDeeds';
import { useRouter, useSearchParams } from 'next/navigation';
import { getUserById } from '../utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function FriendView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const auth = useSelector((state: RootState) => state.user.isAuth);
  if (!auth) {
    router.push('/');
  }

  const [name, setName] = useState('');

  getUserById(+searchParams.get('id')!).then((data) => {
    setName(data.name);
  });

  return (
    <div className="flex flex-col items-center py-4 w-full">
      <h1 className="text-2xl">{name}</h1>
      <Suspense fallback={<div>Loading..</div>}>
        <ShowGoodDeeds id={+searchParams.get('id')!} canEdit={false} />
      </Suspense>
    </div>
  );
}
