import React from 'react';
import './Paginated.css';

function Paginated({ itemsPerPage, dataLength, setCurrentPage, currentPage, paginated }) {
  const pageNumbers = []
  let numberPage = Math.ceil(dataLength / itemsPerPage);

  for (let i = 1; i <= Math.ceil(dataLength / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='divP'>

    <div className='containerwe'>
      <ul className="paginadoContainer" >
        <button
          className="a"
          disabled={currentPage === 1}
          onClick={() => {
          setCurrentPage(
            (currentPage === 1)
            ? currentPage 
              : currentPage - 1
          )}}
        >
          <svg
            className="bi bi-caret-left-fill"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg>
        </button>
        {pageNumbers?.map(number => (
          <li className="li" key={number}>
              <button
                key={number}
                className="a"
                disabled={currentPage === number}
                onClick={() => paginated(number)}
                >
                {number}
              </button>
          </li>
        ))}

        <button
          className="a"
          disabled={currentPage === pageNumbers.length}
          onClick={() => setCurrentPage(
            (currentPage === numberPage)
              ? currentPage 
              : currentPage + 1
          )}
        >
          <svg
            className="bi bi-caret-right-fill"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </button>
      </ul>
    </div>
            </div>
  )
}

export default Paginated;