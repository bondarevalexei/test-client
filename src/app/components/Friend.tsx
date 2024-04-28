import { useState } from 'react';
import { getUserById } from '../utils/utils';

export default function Friend({ id }: { id: number }) {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [email, setEmail] = useState('');

  getUserById(id).then((data) => {
    setName(data.name);
    setTag(data.tag);
    setEmail(data.email);
  });

  return (
    <div className="flex flex-col gap-2 px-2 py-1 w-1/3 border border-black rounded-lg">
      <div className="flex flex-row justify-between w-full">
        <div>Name: {name}</div>
        <div>Tag: {tag}</div>
      </div>
      <div>Email: {email}</div>
    </div>
  );
}
