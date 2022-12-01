import React, { useState, useEffect } from 'react';
import { DotWave } from '@uiball/loaders';

import { api } from './utils/api';
import { Pagination } from './components/Pagination';
import { User } from './models/UserModel';
import { Card } from './components/Card';

import './global.css';
import { CardProps } from './models/PageModel';

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

  function handlePaginate() {
    return (
      <>
        {isLoading ? (
          setIsLoading
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={apiData?.length}
            paginate={paginate}
          />
        )}
      </>
    );
  }

  function handleIsLoading() {
    return <>
      <DotWave size={47} speed={1} color="yellow" />
    </>
  }

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: User[] = apiData?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    void setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
          {handleIsLoading()}
        </div>
      ) : (
        <Card currentPosts={currentPosts} item={item} index={index} />
      )}
      <div className="sm:mx-4 sm:px-4 py-4 p-4 flex">{handlePaginate()}</div>
    </div >
  );
};
