export interface GoodDeed {
  title: string;
  description: string | null;
}

export interface CreateGoodDeed {
  title: string;
  description: string | null;
  userId: number;
}
