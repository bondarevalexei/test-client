'use client';

import { RootState } from '@/store/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserByTag, getUserInfo, updateUser } from '../utils/utils';
import { User } from '@/entity/User';
import { update } from '@/store/slice';
import Friend from '../components/Friend';
import { useRouter } from 'next/navigation';

export default function Friends() {
  const [friendTag, setFriendTag] = useState('');

  const user = useSelector((state: RootState) => state.user.user);
  const dispatcher = useDispatch();

  const router = useRouter();

  const auth = useSelector((state: RootState) => state.user.isAuth);
  if (!auth) {
    router.push('/');
  }

  const handleAddFriendBtnClick = async () => {
    const temp = await getUserByTag(friendTag);

    if (temp) {
      const tempUser: User = {
        id: user!.id,
        name: user!.name,
        email: user!.email,
        tag: user!.tag,
        Friends: user!.Friends
          ? [...user!.Friends, String(temp.id)]
          : [String(temp.id)],
      };
      const resUser = await updateUser(tempUser);
      dispatcher(update(resUser));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-4 w-1/2 py-4">
        <input
          value={friendTag}
          placeholder="Введите тэг друга"
          onChange={(e) => setFriendTag(e.target.value)}
          className="border border-black px-2 py-1 w-full"
        />
        <button
          onClick={handleAddFriendBtnClick}
          className="border border-green-600 bg-green-200 px-2 py-1"
        >
          Добавить
        </button>
      </div>

      {user?.Friends?.map((friend, index) => (
        <div
          key={index}
          className="flex flex-col w-full items-center cursor-pointer"
          onClick={() => router.push(`/FriendView?id=${+friend}`)}
        >
          <Friend id={+friend} />
        </div>
      ))}
    </div>
  );
}
