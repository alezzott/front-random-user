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
  item: User;
  index: null;
  currentPosts: User[];
  data: User[];
  isSearch: any;
  isLoading: any;
}
