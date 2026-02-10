import React from 'react'

function Pagination({ page, totalPages, setPage }) {
  return (
    <>
    <div className="d-flex justify-content-center my-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><button className="page-link" onClick={() => setPage(page > 1 ? page - 1 : page)}>Previous</button></li>

            {page > 1 && (
              <li className="page-item"><button className="page-link" onClick={() => setPage(page - 1)}>{page - 1}</button></li>
            )}

            <li className="page-item active"><button className="page-link" onClick={() => setPage(page)}>{page}</button></li>

            {page < totalPages && (
              <>
                <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1)}>{page + 1}</button></li>
                {page + 1 < totalPages && (
                  <li className="page-item"><button className="page-link" onClick={() => setPage(page + 2)}>{page + 2}</button></li>
                )}
              </>
            )}

            <li className="page-item"><button className="page-link" onClick={() => setPage(page < totalPages ? page + 1 : page)}>Next</button></li>
          </ul>
        </nav>
      </div>
      </>
  )
}

export default Pagination