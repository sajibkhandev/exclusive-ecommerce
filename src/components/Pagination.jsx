import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from '../components/Card'


function Items({ currentItems }) {
    return (
        <div className='flex flex-wrap justify-between gap-y-10'>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <Card id={item.id} title={item.title} image={item.thumbnail} saleprice={item.price} regularprice={"500"} badge="new" />
                    </div>
                ))}
        </div>
    );
}

function Pagination({ itemsPerPage }) {

    const [itemOffset, setItemOffset] = useState(0);
    const [alldata, setAllData] = useState([])


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setAllData(data.products))
    }, [])


    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = alldata.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(alldata.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % alldata.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className='flex items-center justify-between'>
                <ReactPaginate
                    breakLabel="...."
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    containerClassName="flex cursor-pointer mt-15"
                    pageLinkClassName="bg-black py-1 px-7 text-white mr-5"
                />
                <h1 className='mt-15'>Start- {itemOffset+1} : End - {alldata.length>endOffset?endOffset:alldata.length} : Total - {alldata.length}</h1>
            </div>
        </>
    );
}

export default Pagination