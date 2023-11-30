import { useState } from "react";

const useTable = (Data, rowsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(Data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = Data?.slice(indexOfFirstRow, indexOfLastRow);

  const nextPage = () => {
    const totalPage = Math.ceil(Data.length / rowsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const setPage = (pageNumber) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPage));
  };

  return {
    setPage,
    currentRows,
    prevPage,
    totalPage,
    nextPage,
    currentPage,
  };
};

export default useTable;
