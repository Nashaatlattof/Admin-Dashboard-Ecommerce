import ReactPaginate from "react-paginate";
import './pagination.css'


export default function PaginatedItems({ itemsPerPage, data, setPage, total }) {


 const pageCount = Math.ceil(total / itemsPerPage) 


  return (
    <>
      <ReactPaginate
        breakLabel=". . ."
        nextLabel=">>"
        onPageChange={(e) => {
          setPage(e.selected + 1);
        }}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="main-paginate d-flex align-items-center justify-content-end "
        pageLinkClassName="anchor-paginate mx-3 rounded-circle bg-success text-white"
        activeLinkClassName="text-muted bg-white "
        previousClassName=""
        previousLinkClassName=" fs-3 fw-bolder previous-link"
        nextLinkClassName="fs-3 fw-bolder next-link"
      />
    </>
  );
}