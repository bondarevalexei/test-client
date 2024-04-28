'use client';

import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import GoodDeed from './GoodDeed';

export default function ShowGoodDeeds({
  id,
  canEdit,
}: {
  id: number;
  canEdit: boolean;
}) {
  const auth = useSelector((state: RootState) => state.user.isAuth);

  const [deedsToDisplay, setDeedsToDisplay] = useState<object[]>([]);

  const router = useRouter();

  if (!auth) {
    router.push('/');
  }

  useEffect(() => {
    fetch(`http://localhost:3000/good-deeds/${+id}?isAll=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((r) => r.json())
      .then((data) => {
        setDeedsToDisplay(data);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-center py-2 w-full items-center">
      {deedsToDisplay.map((gd) => (
        <GoodDeed key={gd.id} goodDeed={gd} canEdit={canEdit} />
      ))}
    </div>
  );
}
