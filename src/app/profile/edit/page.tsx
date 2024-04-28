'use client';

import { updateUser } from '@/app/utils/utils';
import { User } from '@/entity/User';
import { update } from '@/store/slice';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function EditProfile() {
  const user = useSelector((state: RootState) => state.user.user);
  const auth = useSelector((state: RootState) => state.user.isAuth);

  const router = useRouter();
  const dispatcher = useDispatch();

  if (!auth) {
    router.push('/');
  }

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [tag, setTag] = useState(user?.tag);

  const handleEditBtnClick = async () => {
    let newUser: User = {
      id: +user!.id,
      name: name!,
      email: email!,
      tag: tag!,
      friends: user!.friends === undefined ? [] : user!.friends,
    };

    const resUser = await updateUser(newUser);
    dispatcher(update(resUser));

    router.push('/profile');
  };

  const handleReturnBtnClick = () => {
    router.push('/profile');
  };

  return (
    <div className="flex flex-col justify-center items-center h-full text-2xl">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
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
