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
  closeDropdown: any;
  refIs: any;
}

export interface CardProps {
  item: User | undefined;
  index: number;
  currentPosts: User[] | null;
  data: User[];
  isSearch: any;
  isLoading: any;
}
