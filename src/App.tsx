import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './global.css'
import Pagination from './components/Pagination';
import { FormatPhone } from './hooks/format';
import { Label, TextInput } from 'flowbite-react';



export const App = () => {
  const [data, setData] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);



  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);


  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20')
      .then((data) => {
        console.log(data);
        setData(data.data.results);
      });
  }, [setData]);



  return <>
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pb-8">
        {(data.map((item, index) => {
          return (
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
                      onClick={() => setShowModal(true)}
                    >
                      Details
                    </button>
                    {showModal ? (
                      <>
                        <div className="flex justify-center overflow-x-hidden overflow-y-auto absolute inset-14 outline-none focus:outline-none">
                          <div className=" flex max-w-2xl text-white ">
                            <div className="border-slate-600 border  relative bg-[#374151]  text-white  rounded-lg shadow ">
                              <div className="flex justify-between items-start p-4 rounded-t border-b  text-white ">
                                <h3 className="text-xl font-semibold text-white ">
                                  Detalhes do Usuário
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal" onClick={() => setShowModal(false)}>
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                              </div>
                              <div className="border-slate-600 border  p-6 space-y-6 grid grid-cols-3 gap-4">
                                <p className="text-base leading-relaxed  text-white">
                                  <img className='w-50 h-50 rounded-full' src={item.picture.large} />
                                </p>
                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                    Name
                                  </Label>
                                  <div className="flex text-gray-300">
                                    {item.name.first} {item.name.last}
                                  </div>
                                </div>
                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                    Gender:
                                  </Label>
                                  <div className="flex text-gray-300">
                                    {item.gender}
                                  </div>
                                </div>
                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                    Age:
                                  </Label>
                                  <div className="flex text-gray-300">
                                    {item.dob.age}
                                  </div>
                                </div>
                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                    Email:
                                  </Label>
                                  <div className="flex text-gray-300">
                                    {item.email}
                                  </div>
                                </div>
                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                    Username:
                                  </Label>
                                  <div className="text-gray-300">
                                    {item.login.username}
                                  </div>
                                </div>
                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                    Cellphone:
                                  </Label>
                                  <div className="text-gray-300">
                                    {item.cell}
                                  </div>
                                </div>

                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                    UserID:
                                  </Label>
                                  <div className="text-gray-300">
                                    {item.login.uuid}
                                  </div>
                                </div>
                                <div className="text-gray-300">
                                  <Label className='flex font-semibold mb-1 2xl text-base font-Roboto text-white'>
                                    Location:
                                  </Label>
                                  <div className='text-white'>
                                    {item.location.street.name}, {item.location.street.number} / {item.location.city}, {item.location.country}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </>
                </div>
              </div>
            </div>
          )
        }))}
      </div>
      <div className='flex p-8 rounded'>
        <Pagination

          postsPerPage={postsPerPage}
          totalPosts={data?.length}
          paginate={paginate}
        />
      </div>
    </div >
  </>
}

export default App;