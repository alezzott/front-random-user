import { SetStateAction } from 'react';
import { User } from './UserModel';

export type PageProps = {
  totalPosts: number;
  postsPerPage: number;
  paginateIndex: unknown;
};

export interface ModalProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  currentUser: User | undefined;
}

export interface CardProps {
  item: unknown;
  index: number;
  currentPosts: unknown;
}
