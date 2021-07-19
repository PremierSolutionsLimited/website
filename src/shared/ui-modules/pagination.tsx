export const Pagination = () => {
  return (
    <nav
      className="px-4 py-3   border-t border-gray-200 "
      aria-label="Pagination"
    >
      <div className="justify-between mt-4 flex items-center ">
        <div className="hidden sm:block">
          <p className=" text-gray-800 text-sm">Showing 1 to 2 of 2 results</p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </nav>
  );
};
