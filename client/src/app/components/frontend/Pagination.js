import React from 'react'

const Pagination = (props) => {
  const { numPages, currentPage, onPreviousClick, onNextClick } = props
  return (
    <nav className="pagination" role="navigation" aria-label="pagination" style={{marginTop: '25px'}} key='nav'>
      { currentPage > 1
        ? <a className="pagination-previous" onClick={onPreviousClick}>Previous</a>
        : <a className="pagination-previous" style={{cursor: 'not-allowed'}}>Previous</a> }

      { currentPage < numPages
        ? <a className="pagination-next" onClick={onNextClick}>Next page</a>
        : <a className="pagination-previous" style={{cursor: 'not-allowed'}}>Next page</a> }
    </nav>
  )
}

export default Pagination
