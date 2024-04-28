import Link from 'next/link';

export default function NotAuthBar() {
  return (
    <div className="flex flex-row h-20 w-full px-4 justify-between items-center border-b border-black">
      <Link href={'/'}>На главную</Link>

      <Link href={'/login'} className="cursor-pointer">
        Войти
      </Link>
    </div>
  );
}
