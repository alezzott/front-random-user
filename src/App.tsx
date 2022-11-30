import React, { useState, useEffect } from 'react';
import { api } from './utils/api'
import './global.css'
import Pagination from './components/Pagination';
import { DotWave } from '@uiball/loaders'
import { User } from './models/PageModel';
import { CardComponent } from './components/Card';

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

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const CurrentPosts: User[] = apiData?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return <>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        <>
          {isLoading ? (
            <div className='flex container items-center content-center w-screen h-screen' >
              <DotWave
                size={47}
                speed={1}
                color="yellow"
              />
            </div>
          ) : (CurrentPosts.map((item: User, index: number) => {
            return (
              <CardComponent
                item={item}
                index={index}
              />
            )
          }))}
          {isLoading ? (
            setIsLoading
          ) : (
            <div className='flex p-8'>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={apiData?.length}
                paginate={paginate}
              />
            </div>
          )}
        </>
      </div >
    </div>
  </>
}
