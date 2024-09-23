import calendarReducer from './features/calendar/slice'
import { configureStore } from '@reduxjs/toolkit'
import interactionsReducer from './features/interactions/slice'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    interactions: interactionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
