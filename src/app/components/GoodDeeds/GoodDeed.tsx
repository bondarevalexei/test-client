'use client';

import { deleteGoodDeed } from '@/app/utils/utils';
import { useRouter } from 'next/navigation';

export default function GoodDeed({
  goodDeed,
  canEdit,
}: {
  goodDeed: {
    title: string;
    id: number;
    userId: number;
    description: string | null;
  };
  canEdit: boolean;
}) {
  const router = useRouter();

  const handleEditBtnClick = () => {
    router.push(`/edit?id=${goodDeed.id}`);
  };

  const handleDeleteBtnClick = async () => {
    const isDel = confirm('Вы действительно хотите удалить доброе дело?');

    if (isDel) {
      await deleteGoodDeed(goodDeed.id);

      window.location.reload();
    }
  };

  return (
    <div className="flex flex-row items-center w-8/12 border border-black">
      <div className="flex flex-col w-full gap-2 items-center">
        <div>{goodDeed.title}</div>
        <div>{goodDeed.description}</div>
      </div>
      {canEdit ? (
        <div className="flex flex-col px-2 py-1 gap-2 items-center">
          <button
            onClick={handleEditBtnClick}
            className="border border-black w-40 rounded-lg"
          >
            Изменить
          </button>
          <button
            onClick={handleDeleteBtnClick}
            className="border border-red-800 bg-red-300 w-40 rounded-lg"
          >
            Удалить
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
