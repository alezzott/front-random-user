import { useState, useEffect } from 'react';

import { api } from './utils/api';
import { getAllPosts, getPageNumber } from './utils/post';
import { Pagination } from './components/Pagination';
import { User } from './models/UserModel';
import { Card } from './components/Card';

import './global.css';
import { CardProps } from './models/PageModel';
import { Loading } from './components/Loading';
import { getLoadTime } from './utils/loading';
import { InputSearch } from './components/Search';


export const App = ({ item, index }: CardProps) => {
  const [data, setData] = useState<User[]>([]);
  const [apiData, setApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await api.get('/?results=100', {
          signal: controller.signal,
        });
        setApiData(response.results);
        setData(response.results);
      } catch (err) {
        console.error(err);
      }
    };
    getLoading;
    fetchData();
    return () => controller.abort();
  }, []);

  const currentPosts = getAllPosts({ apiData, postsPerPage, currentPage });
  const getPage = getPageNumber({ setCurrentPage });
  const getLoading = getLoadTime({ isLoading, setIsLoading });

  return (
    <main id="users">
      <section className="container mx-auto">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <InputSearch />
            <Card currentPosts={currentPosts} item={item} index={index} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={apiData?.length}
              paginateIndex={getPage}
            />
          </>
        )}
      </section>
    </main>
  );
};
