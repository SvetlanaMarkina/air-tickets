import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ticketReducer from './reducers/TicketSlice';

const rootReducer = combineReducers({
  ticketReducer,
})
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']