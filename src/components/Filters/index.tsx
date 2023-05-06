import styles from './index.module.scss';
import { useState } from 'react';
import { FilterTransfers } from './FilterTransfers';
import { FilterByAirlines } from './FilterByAirlines';

function Filters() {
  const [dropActive, setDropActive] = useState(
    window.innerWidth > 1000 ? true : false
  )

  return (
    <div className={styles.filters}>
      <div
        onClick={() => {
          setDropActive(!dropActive)
        }}
        className={styles.filterDrop}
      >
        <span>Любая авиакомпания, любое кол-во пересадок</span>
        <span>Открыть настройки</span>
      </div>
      <div className={dropActive ? styles.filtersList : styles.filtersListHide}>
        <FilterTransfers />
        <FilterByAirlines />
      </div>
    </div>
  )
}

export { Filters }