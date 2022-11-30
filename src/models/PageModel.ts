import { SetStateAction } from "react";
import { User } from "./UserModel";

export interface PageProps {
  totalPosts: any;
  postsPerPage: any;
  paginate: any;
}

export interface ModalProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  currentUser: User | undefined;
}

export interface CardProps {
  item: any;
  index: any;
}
