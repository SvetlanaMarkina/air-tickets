import styles from './index.module.scss';
import { TicketTime } from '../../dataFormat';
import { getCompanyLogo } from '../../dop/logo';
import { convertTime } from '../../dop/convertTime';

interface Props {
  price: number
  from: string
  to: string
  company: string
  currency: string
  date: string
  duration: number
  time: TicketTime
  connectionAmount: null | number
}

function Ticket({
  price,
  from,
  to,
  company,
  currency,
  date,
  duration,
  time,
  connectionAmount,
}: Props) {
  return (
    <li className={styles.ticket}>
      <div className={styles.price}>
        <span>
          {price} {currency === 'RUB' ? 'Р' : currency}
        </span>
        <img src={getCompanyLogo(company)} alt="company" />
      </div>
      <ul className={styles.infoList}>
        <li className={styles.infoItem}>
          <div>
            {from}-{to}
          </div>
          <div>
            {time.startTime}-{time.endTime}
          </div>
        </li>
        <li className={styles.infoItem}>
          <div>В пути</div>
          <div>{convertTime(duration)}</div>
        </li>
        <li className={styles.infoItem}>
          <div>Пересадки</div>
          <div>
            {!connectionAmount
              ? 'Без пересадок'
              : connectionAmount === 1
              ? 'Одна пересадка'
              : `${connectionAmount} пересадки`}
          </div>
        </li>
      </ul>
    </li>
  )
}

export { Ticket }