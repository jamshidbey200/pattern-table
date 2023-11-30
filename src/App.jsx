import './App.css'
import Pagination from './components/Pagination';
import Table from './components/Table'
import UseTable from './hooks/hook';
import { Data } from './static/data'


function App() {
  const { currentRows,
    currentPage,
    totalPage,
    nextPage,
    prevPage,
    setPage,
  } = UseTable(Data, 10);

  return (
    <>
      <h2>Compound Table</h2>
      <Table>
        <Table.Head>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>First name</Table.Th>
            <Table.Th>Last name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Phone</Table.Th>
          </Table.Tr>
        </Table.Head>

        <Table.Body>
          {currentRows.map((el) => (
            <Table.Tr key={el.index}>
              <Table.Td>{el.id}</Table.Td>
              <Table.Td>{el.firstName}</Table.Td>
              <Table.Td>{el.lastName}</Table.Td>
              <Table.Td>{el.email}</Table.Td>
              <Table.Td>{el.phone}</Table.Td>
            </Table.Tr>
          ))
          }
        </Table.Body>
      </Table>
      <Pagination>
        <Pagination.Left
          disabled={currentPage === 1}
          handleClick={prevPage}
        />
        <Pagination.Page
          currentPage={currentPage}
          setPage={setPage}
          totalPage={totalPage}
          count={Math.ceil(Data.length / 10)}
          current={currentPage}
        />
        <Pagination.Right
          disabled={currentPage === Math.ceil(Data.length / 10)}
          handleClick={nextPage}
        />
      </Pagination>
    </>
  )
}

export default App