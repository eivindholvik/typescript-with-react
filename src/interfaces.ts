export interface IUser {
  id: number;
  userName: string;
  age: number;
  siblings: number[];
  isAdmin?: boolean;
}

export interface IData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface IUnderProps {
  one?: string;
  two?: boolean;
  three?: number;
}
