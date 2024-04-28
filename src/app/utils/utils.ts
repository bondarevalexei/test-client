import { CreateGoodDeed, GoodDeed } from '@/entity/GoodDeed';
import { CreateUser, User } from '@/entity/User';

export const signIn = async (email: string, password: string): Promise<any> => {
  const user = {
    email: email,
    password: password,
  };

  const res = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  }).then((r) => r.json());

  return { res };
};

export const getUserInfo = async (email: string): Promise<any> => {
  const user = await fetch(`http://localhost:3000/users/${email}`, {
    method: 'GET',
    mode: 'cors',
  }).then((r) => r.json());

  return user;
};

export const getUserByTag = async (tag: string): Promise<any> => {
  const user = await fetch(`http://localhost:3000/users/${tag}`, {
    method: 'GET',
    mode: 'cors',
  }).then((r) => r.json());

  return user;
};

export const getUserById = async (id: number): Promise<any> => {
  const user = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'GET',
    mode: 'cors',
  }).then((r) => r.json());

  return user;
};

export const updateUser = async (newUser: User): Promise<any> => {
  const res = await fetch(`http://localhost:3000/users/${newUser.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  }).then((r) => r.json());

  return res;
};

export const createUser = async (newUser: CreateUser): Promise<any> => {
  const res = await fetch(`http://localhost:3000/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  }).then((r) => r.json());

  return res;
};

export const deleteUser = async (id: number): Promise<any> => {
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((r) => r.json());

  return res;
};

export const getGoodDeeds = async (id: number): Promise<any> => {
  const res = await fetch(`http://localhost:3000/good-deeds/${id}?isAll=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((r) => r.json());

  return res;
};

export const deleteGoodDeed = async (id: number): Promise<any> => {
  const res = await fetch(`http://localhost:3000/good-deeds/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((r) => r.json());

  return res;
};

export const getGoodDeedById = async (id: string): Promise<any> => {
  const res = await fetch(
    `http://localhost:3000/good-deeds/${+id}?isAll=false`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  ).then((r) => r.json());

  return res;
};

export const updateGoodDeed = async (
  goodDeed: GoodDeed,
  id: number
): Promise<any> => {
  const res = await fetch(`http://localhost:3000/good-deeds/${+id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(goodDeed),
  }).then((r) => r.json());

  return res;
};

export const createGD = async (goodDeed: CreateGoodDeed): Promise<any> => {
  const res = await fetch('http://localhost:3000/good-deeds', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(goodDeed),
  }).then((r) => r.json());

  return { res };
};
