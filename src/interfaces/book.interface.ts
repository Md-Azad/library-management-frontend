export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  avilable: boolean;
  copies: number;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}
