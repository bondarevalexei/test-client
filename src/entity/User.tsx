export interface User {
  id: number;
  name: string;
  email: string;
  tag: string;
  Friends: string[] | null;
}

export interface CreateUser {
  name: string;
  email: string;
  tag: string;
  password: string;
  friends: string[] | null;
}
