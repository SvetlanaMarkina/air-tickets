import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { sortTickets } from '../../store/reducers/CreateAction';

function Sorter() {
  const dispatch = useAppDispatch()
  const { sortTypes, currentSorter } = useAppSelector(
    (state) => state.ticketReducer
  )
  const handler = (item: string) => {
    if (currentSorter === item) {
      dispatch(sortTickets(''))
    } else {
      dispatch(sortTickets(item))
    }
  }
  return (
    <ul className={styles.sorter}>
      {sortTypes.map((item, index) => (
        <li
          key={index}
          onClick={() => handler(item)}
          className={currentSorter === item ? styles.item__active : styles.item}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export { Sorter }