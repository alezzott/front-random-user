import { useState } from 'react';
import { PageProps } from '../models/PageModel';

export const Pagination = ({
  paginate,
  totalPosts,
  postsPerPage,
}: PageProps) => {
  const [activeNumber, setActiveNumber] = useState(1);

  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  function handleClick(number: number) {
    paginate(number);
    setActiveNumber(number);
  }

  return (
    <>
      {pageNumbers.map((index) => (
        <div key={index} className="pag-div px-[3px]">
          <button
            onClick={() => handleClick(index)}
            className={`p-8 rounded-md py-[length:0.56rem] px-3 leading-tight cursor-pointer  border border-slate-600 text-white hover:bg-[#374151] 
                ${index === activeNumber ? 'bg-[#12212]' : 'bg-[#1f2937]'}`}
          >
            {index}
          </button>
        </div>
      ))}
    </>
  );
};
