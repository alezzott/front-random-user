import { SetStateAction } from 'react';
import { User } from './UserModel';

export interface PageProps {
  totalPosts: number;
  postsPerPage: number;
  paginateIndex: (value: number) => number | undefined;
}

export interface ModalProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  currentUser: User | undefined;
}

export interface CardProps {
  currentPosts: User[];
  data: User[];
}
