const Pagination = (props: any) => {
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(props.totalPosts / props.postsPerPage); index++) {
        pageNumbers.push(index);
    }

    return <>
        {pageNumbers.map(Number => (
            <div key={Number} className='pag-div' >
                <a onClick={() => props.paginate(Number)} href="" className="p-8  py-[length:0.56rem] px-3 leading-tight   bg-[#1f2937] border border-slate-600 text-white hover:bg-[#374151]">
                    {Number}
                </a>
            </div>
        ))}
    </>
};

export default Pagination;