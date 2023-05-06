import { stat } from 'fs';
import { Ticket } from '../../dataFormat';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterTickets } from './CreateAction';

interface TicketState {
  tickets: Ticket[]
  filteredTickets: Ticket[]
  isLoading: boolean
  error: string
  sortTypes: string[]
  filterTransfersTypes: string[]
  filterByAirlinesTypes: string[]
  currentSorter: string
  currentFilters: string[]
}

const initialState: TicketState = {
  tickets: [],
  filteredTickets: [],
  isLoading: false,
  error: '',
  sortTypes: ['Самый дешевый', 'Самый быстрый', 'Самый оптимальный'],
  filterTransfersTypes: [
    'Без пересадок',
    'Одна пересадка',
    '2 пересадки',
    '3 пересадки',
  ],
  filterByAirlinesTypes: ['Pobeda Airlines', 'Red Wings', 'S7 Airlines'],
  currentSorter: '',
  currentFilters: [],
}

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true
    },
    usersFetchingSuccess(state, action: PayloadAction<Ticket[]>) {
      state.isLoading = false
      state.error = ''
      state.tickets = action.payload
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    setSort(state, action: PayloadAction<string>) {
      state.currentSorter = action.payload
      switch (state.currentSorter) {
        case state.sortTypes[0]:
          state.tickets.sort((a, b) => a.price - b.price)
          state.filteredTickets.sort((a, b) => a.price - b.price)
          break
        case state.sortTypes[1]:
          state.tickets.sort((a, b) => a.duration - b.duration)
          state.filteredTickets.sort((a, b) => a.duration - b.duration)
          break
        case state.sortTypes[2]:
          state.tickets.sort((a, b) => {
            let ticket_1 = !a.connectionAmount ? 0 : a.connectionAmount
            let ticket_2 = !b.connectionAmount ? 0 : b.connectionAmount
            return ticket_1 - ticket_2
          })
          state.filteredTickets.sort((a, b) => {
            let ticket_1 = !a.connectionAmount ? 0 : a.connectionAmount
            let ticket_2 = !b.connectionAmount ? 0 : b.connectionAmount
            return ticket_1 - ticket_2
          })
          break
        default:
          state.tickets.sort((a, b) => a.id - b.id)
          state.filteredTickets.sort((a, b) => a.id - b.id)
          break
      }
    },
    filter(state, action: PayloadAction<string>) {
      if (!state.currentFilters.includes(action.payload)) {
        state.currentFilters.push(action.payload)
      } else {
        const index = state.currentFilters.findIndex(
          (item) => item === action.payload
        )
        state.currentFilters.splice(index, 1)
      }
      state.filteredTickets = state.tickets.filter((ticket) => {
        const transfer = !ticket.connectionAmount
          ? 'Без пересадок'
          : ticket.connectionAmount === 1
          ? 'Одна пересадка'
          : `${ticket.connectionAmount} пересадки`
        if (
          state.currentFilters.some((item) => item === transfer) ||
          state.currentFilters.some((item) => item === ticket.company)
        ) {
          return true
        } else {
          return false
        }
      })
    },
  },
})

export default ticketSlice.reducer
