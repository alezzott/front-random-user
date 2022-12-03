import { PageProps } from '../models/PageModel';
import { User } from '../models/UserModel';

export function getAllPosts({ apiData, postsPerPage, currentPage }: any) {
  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts: User[] = apiData?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  return currentPosts;
}

export function getPageNumber({ setCurrentPage }: any) {
  const paginate = (pageNumber: React.SetStateAction<number>) =>
    void setCurrentPage(pageNumber);

  return paginate;
}
