'use client';

import { getGoodDeedById, updateGoodDeed } from '@/app/utils/utils';
import { GoodDeed } from '@/entity/GoodDeed';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function EditGoodDeed() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const goodDeed = getGoodDeedById(searchParams.get('id'));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState(0);

  getGoodDeedById(searchParams.get('id')).then((data) => {
    setDescription(data.description);
    setTitle(data.title);
    setId(data.id);
  });

  const handleEditBtnClick = async () => {
    let newGD: GoodDeed = {
      title: title,
      description: description,
    };

    const resGD = updateGoodDeed(newGD, id);
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
          onClick={handleEditBtnClick}
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
