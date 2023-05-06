import axios from 'axios';
import { AppDispatch } from '../store';
import { Ticket } from '../../dataFormat';
import { ticketSlice } from './TicketSlice';

export const fetchTickets = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ticketSlice.actions.usersFetching())
    const response = await axios.get<Ticket[]>(
      'https://63e78232ac3920ad5bdf074d.mockapi.io/tickets'
    )
    dispatch(ticketSlice.actions.usersFetchingSuccess(response.data))
  } catch (e: any) {
    dispatch(ticketSlice.actions.usersFetchingError(e.message))
  }
}

export const sortTickets = (sorter: string) =>
  ticketSlice.actions.setSort(sorter)

export const filterTickets = (filter: string) =>
  ticketSlice.actions.filter(filter)
