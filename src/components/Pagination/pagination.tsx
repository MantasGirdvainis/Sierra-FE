
import { usePagination, DOTS } from "hooks/usePagination";
import { ArrowRight } from "components/Icons";

import styles from './pagination.module.css';

type PaginationType = {
  onPageChange: (page: number) => void,
  totalCount: number,
  siblingCount: number,
  currentPage: number
}

const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage }: PaginationType): JSX.Element | null => {

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  };


  return (
    <ul className={styles.paginationList}>
      <li className={styles.paginationItem}>
        <button className={styles.button} onClick={onPrevious}>
          <ArrowRight className={styles.arrowRight} />
        </button>
      </li>

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li>&#8230;</li>
        }

        return (
          <li className={styles.paginationItem} key={pageNumber.toString()} onClick={() => typeof pageNumber === 'number' && onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        )
      })}

      <li className={styles.paginationItem}>
        <button className={styles.button} onClick={onNext}>
          <ArrowRight className={styles.arrowLeft} />
        </button>
      </li>
    </ul>
  )
}

export default Pagination;
