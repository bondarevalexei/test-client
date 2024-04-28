'use client';

import { RootState } from '@/store/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createGD } from '../utils/utils';
import * as GoodDeed from '@/entity/GoodDeed';
import { useRouter } from 'next/navigation';

export default function CreateGoodDeed() {
  const user = useSelector((state: RootState) => state.user.user);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleCreateBtnClick = async () => {
    let tempGD: GoodDeed.CreateGoodDeed = {
      title: title,
      description: description,
      userId: user!.id,
    };

    const resGD = createGD(tempGD);
    router.push('/');
  };

  const handleReturnBtnClick = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center h-full text-2xl gap-4">
      Title:{' '}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-black px-2 py-1"
      />
      Description:
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-black px-2 py-1"
      />
      <div className="flex flex-row gap-2">
        <button
          onClick={handleCreateBtnClick}
          className="w-32 border border-black rounded-lg"
        >
          Применить
        </button>
        <button
          onClick={handleReturnBtnClick}
          className="w-32 border border-red rounded-lg"
        >
          Вернуться
        </button>
      </div>
    </div>
  );
}
