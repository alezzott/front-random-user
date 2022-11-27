import React, { useState, useEffect } from 'react';
import { api } from './utils/api'
import './global.css'
import Pagination from './components/Pagination';
import { FormatPhone } from './hooks/format';
import { Label } from 'flowbite-react';
import { DotWave } from '@uiball/loaders'


export const App = () => {
  const [data, setData] = useState<any[]>([]);
  const [apiData, setApiData]: any = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>()

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
  const CurrentPosts = apiData?.slice(indexOfFirstPost, indexOfLastPost) || []


  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

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

        ) : (CurrentPosts.map((item: any, index: number) => {
          return (
            <>
              <div key={index} className=" bg-[#374151] w-full max-w-sm  border border-slate-600 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                  <img className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg" src={item.picture.large} alt="Bonnie image" />
                  <h5 className="mb-1 text-xl font-medium">{item.name.first} {item.name.last}</h5>
                  <span className="text-sm">{item.email}</span>
                  <span className="text-sm">{FormatPhone(item.cell)}</span>
                  <span className="text-sm">{item.location.city}, {item.location.country}</span>
                  <div className="flex mt-4 space-x-3 md:mt-5">
                    <>
                      <button
                        className="block border-solid border-2 border-slate-600 text-white bg-[#374151] hover:bg-[#111827] focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button"
                        onClick={() => {
                          setCurrentUser(item);
                          setShowModal(true);
                        }}
                      >
                        Details
                      </button>
                      {showModal ? (
                        <>
                          <div className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-14 outline-none focus:outline-none">
                            <div className=" flex max-w-2xl text-white ">
                              <div className="border-slate-600 border  relative bg-[#374151]  text-white  rounded-lg shadow ">
                                <div className="flex justify-between items-start p-4 rounded-t border-b  text-white ">
                                  <h3 className="text-xl font-semibold text-white ">
                                    Detalhes do Usuário
                                  </h3>
                                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal" onClick={() => setShowModal(false)}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                  </button>
                                </div>
                                <div className="border-slate-600 border  p-6 space-y-6 grid grid-cols-3 gap-4">
                                  <p className="text-base leading-relaxed  text-white">
                                    <img className='w-50 h-50 rounded-full' src={currentUser.picture.large} />
                                  </p>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                      Name
                                    </Label>
                                    <div className="flex text-gray-300">
                                      {currentUser.name.first} {currentUser.name.last}
                                    </div>
                                  </div>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                      Gender:
                                    </Label>
                                    <div className="flex text-gray-300">
                                      {currentUser.gender}
                                    </div>
                                  </div>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                      Age:
                                    </Label>
                                    <div className="flex text-gray-300">
                                      {currentUser.dob.age}
                                    </div>
                                  </div>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                      Email:
                                    </Label>
                                    <div className="flex text-gray-300">
                                      {currentUser.email}
                                    </div>
                                  </div>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                      Username:
                                    </Label>
                                    <div className="text-gray-300">
                                      {currentUser.login.username}
                                    </div>
                                  </div>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                      Cellphone:
                                    </Label>
                                    <div className="text-gray-300">
                                      {currentUser.cell}
                                    </div>
                                  </div>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                      UserID:
                                    </Label>
                                    <div className="text-gray-300">
                                      {currentUser.login.uuid}
                                    </div>
                                  </div>
                                  <div className="text-gray-300">
                                    <Label className='flex font-semibold mb-1 2xl text-base font-Roboto text-white'>
                                      Location:
                                    </Label>
                                    <div className='text-white'>
                                      {currentUser.location.street.name}, {currentUser.location.street.number} / {currentUser.location.city}, {currentUser.location.country}
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div >
                        </>
                      ) : null}
                    </>
                  </div >
                </div >
              </div >
            </>
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
      </div >
    </div>
  </>
}
