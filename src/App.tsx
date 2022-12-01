import React, { useState, useEffect } from 'react';

import { api } from './utils/api';
import { Pagination } from './components/Pagination';
import { User } from './models/UserModel';
import { Card } from './components/Card';

import './global.css';
import { CardProps } from './models/PageModel';
import { Loading } from './components/Loading';

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
    fetchData();
    return () => controller.abort();
  }, []);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: User[] = apiData?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Card currentPosts={currentPosts} item={item} index={index} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={apiData?.length}
            paginateIndex={paginate}
          />
        </>
      )}
    </div>
  );
};
