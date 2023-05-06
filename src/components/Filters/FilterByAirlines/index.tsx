import styles from '../index.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import { CircleCheckbox } from './CircleCheckbox';

function FilterByAirlines() {
  const { filterByAirlinesTypes } = useAppSelector((state) => state.ticketReducer)
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Компания</div>
      <ul className={styles.сheckboxes}>
        {filterByAirlinesTypes.map((item) => {
          return (
            <li key={item}>
              <CircleCheckbox text={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { FilterByAirlines }
