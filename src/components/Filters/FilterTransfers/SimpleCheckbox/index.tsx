import styles from './index.module.scss';
import { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../../../hooks/redux';
import { filterTickets } from '../../../../store/reducers/CreateAction';

interface Props {
  text: string
}

function SimpleCheckbox({ text }: Props) {
  const dispatch = useAppDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const heandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked)
    dispatch(filterTickets(e.target.value))
  }
  return (
    <label className={styles.wrapper}>
      <input
        checked={isChecked}
        onChange={(e) => heandler(e)}
        type="checkbox"
        value={text}
      />
      <span className={styles.checkbox} aria-hidden="true">
        {isChecked ? (
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8.31943C2.70134 11.176 5.32053 13.7476 7.83825 17C10.5756 11.6792 13.3772 6.33985 18 0.557614L16.7544 0C12.851 4.04575 9.81835 7.87541 7.18327 12.4266C5.35082 10.8133 2.38937 8.53034 0.581158 7.35739L0 8.31943Z"
              fill="#8700B8"
            />
          </svg>
        ) : (
          ''
        )}
      </span>
      <span className={isChecked ? styles.activeText : styles.text}>
        {text}
      </span>
    </label>
  )
}

export { SimpleCheckbox }
