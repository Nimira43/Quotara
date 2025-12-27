const Pagination = ({
  totalPages,
  currentPage,
  onPageChange
}) => {
  if (totalPages <= 1) return null 

  return ( 
    <div className='flex justify-center gap-2 mt-8'>
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 cursor-pointer rounded ${
            currentPage === idx + 1 
            ? 'text-white border-2 border-orange-400 bg-orange-400'
            : 'text-orange-400 border-2 border-orange-400 bg-transparent'
            }`}
          onClick={() => setCurrentPage(idx + 1)}
        >
          { idx + 1 }
        </button>
      ))}
    </div>
  )
}
 
export default Pagination