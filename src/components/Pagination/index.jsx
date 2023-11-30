import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import styles from "./styles.module.scss"

const Pagination = ({ children }) => {
    return (
        <div className={styles.box}>
            {children}
        </div>
    )
}

Pagination.Left = ({ handleClick, disabled }) => (
    <button disabled={disabled} onClick={handleClick} className={styles.btn}>
        <FaChevronLeft />
    </button>
)
Pagination.Right = ({ handleClick, disabled }) => (
    <button disabled={disabled} onClick={handleClick} className={styles.btn}>
        <FaChevronRight />
    </button>
)
Pagination.Page = ({ currentPage, setPage, totalPage }) => {
    const handlePageClick = (pageNumber) => {
        setPage(pageNumber)
    }

    const currentList = Array.from({ length: totalPage }, (el, index) => (
        <span
            className={index + 1 === currentPage ? styles.currentPgn : styles.paginate}
            onClick={() => handlePageClick(index + 1)}
            key={index}
        >
            {index + 1}
        </span>
    ))

    return (
        <div>{currentList}</div>
    )
}

export default Pagination
