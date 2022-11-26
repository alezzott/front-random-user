import { useState } from "react";


const Pagination = (props: any) => {
    const [activeNumber, setActiveNumber] = useState<number>(1)

    const pageNumbers = [
    ];

    for (let index = 1; index <= Math.ceil(props.totalPosts / props.postsPerPage); index++) {
        pageNumbers.push(index);
    }

    function handleClick(number: number) {
        props.paginate(number)
        setActiveNumber(number)
    }

    return <>
        {pageNumbers.map(Number => (
            <div key={Number} className='pag-div' >
                <button onClick={() => handleClick(Number)} className={`p-8  rounded-md py-[length:0.56rem] px-3 leading-tight cursor-pointer  border border-slate-600 text-white hover:bg-[#374151] 

                ${Number === activeNumber ? "bg-[#12212]" : "bg-[#1f2937]"}`}>
                    {Number}
                </button>
            </div>
        ))}
    </>
};

export default Pagination;