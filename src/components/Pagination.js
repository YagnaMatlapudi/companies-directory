import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

export default function Pagination({ pageCount, onPageChange }) {
  if (pageCount <= 1) return null;
  return (
    <div className="flex justify-center">
      <ReactPaginate
        previousLabel={'←'}
        nextLabel={'→'}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
}
