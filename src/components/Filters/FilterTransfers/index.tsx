import styles from '../index.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { SimpleCheckbox } from './SimpleCheckbox';

function FilterTransfers() {
  const { filterTransfersTypes } = useAppSelector((state) => state.ticketReducer)
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Количество пересадок</div>
      <ul className={styles.сheckboxes}>
        {filterTransfersTypes.map((item) => {
          return (
            <li key={item}>
              <SimpleCheckbox text={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { FilterTransfers }
