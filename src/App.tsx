import React, { useState, useEffect } from 'react';
import { DotWave } from '@uiball/loaders'

import { api } from './utils/api'
import { Pagination } from './components/Pagination';
import { User } from './models/PageModel';
import { Card } from './components/Card';

import './global.css'

export const App = () => {
  const [data, setData] = useState<User[]>([]);
  const [apiData, setApiData]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const controller = new AbortController()

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const { data: response } = await api.get('/?results=100', { signal: controller.signal })
        setApiData(response.results);
        setData(response.results);
      } catch (err) {
        console.error(err)
      }
    }
    fetchData();
    return () => controller.abort()

  }, []);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  function handlePaginate() {
    return <>
      {isLoading ? (
        setIsLoading
      ) : (<Pagination
        postsPerPage={postsPerPage}
        totalPosts={apiData?.length}
        paginate={paginate}
      />)}
    </>
  }

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: User[] = apiData?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: React.SetStateAction<number>) => void setCurrentPage(pageNumber);

  return <>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {isLoading ? (
          <div className='flex container items-center content-center w-screen h-screen' >
            <DotWave
              size={47}
              speed={1}
              color="yellow"
            />
          </div>
        ) : (currentPosts.map((item: User, index: number) =>
        (
          <Card
            item={item}
            index={index}
          />
        )
        ))}
      </div >
      <div className='sm:mx-4 sm:px-4 py-4 p-4 flex'>
        {handlePaginate()}
      </div>
    </div>
  </>
}
