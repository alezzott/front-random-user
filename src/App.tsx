import React, { useState, useEffect } from 'react';

import { api } from './utils/api';
import { getAllPosts, getPageNumber } from './utils/post';
import { Pagination } from './components/Pagination';
import { User } from './models/UserModel';
import { Card } from './components/Card';

import './global.css';
import { CardProps, PageProps } from './models/PageModel';
import { Loading } from './components/Loading';
import { getLoadTime } from './utils/loading';

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
    <div className="container mx-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Card currentPosts={currentPosts} item={item} index={index} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={apiData?.length}
            paginateIndex={getPage}
          />
        </>
      )}
    </div>
  );
};
