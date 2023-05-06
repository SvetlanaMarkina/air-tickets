import { useAppDispatch } from '../../../../hooks/redux';
import styles from './index.module.scss';
import { useState, ChangeEvent } from 'react';
import { filterTickets } from '../../../../store/reducers/CreateAction';

interface Props {
  text: string
}

function CircleCheckbox({ text }: Props) {
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
        type="checkbox"
        onChange={(e) => heandler(e)}
        value={text}
      />
      <span
        className={isChecked ? styles.active : styles.checkbox}
        aria-hidden="true"
      ></span>
      <span className={isChecked ? styles.activeText : styles.text}>
        {text}
      </span>
    </label>
  )
}

export { CircleCheckbox }
