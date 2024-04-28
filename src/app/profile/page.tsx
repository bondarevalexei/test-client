'use client';

import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../utils/utils';
import { logout } from '@/store/slice';

export default function Profile() {
  const user = useSelector((state: RootState) => state.user.user);
  const auth = useSelector((state: RootState) => state.user.isAuth);

  const dispatcher = useDispatch();
  const router = useRouter();

  if (!auth) {
    router.push('/');
  }

  const handleEditBtnClick = () => {
    router.push('/profile/edit');
  };

  const handleDeleteBtnClick = async () => {
    const isDel = confirm('Вы действительно хотите удалить профиль?');

    if (isDel) {
      await deleteUser(user!.id);

      dispatcher(logout());
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full text-2xl gap-4">
      <div>Имя: {user?.name}</div>
      <div>Почта: {user?.email}</div>
      <div>Тэг: {user?.tag}</div>
      <div className="flex flex-row gap-4">
        <button
          onClick={handleEditBtnClick}
          className="border border-black rounded-lg w-64"
        >
          Править
        </button>
        <button
          onClick={handleDeleteBtnClick}
          className="border border-red-800 bg-red-300 rounded-lg w-64"
        >
          Удалить профиль
        </button>
      </div>
    </div>
  );
}
