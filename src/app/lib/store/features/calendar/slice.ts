import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { isNil } from 'lodash'

export enum EventType {
  Activity = 'activity',
  People = 'people',
  Travel = 'travel',
}

export type Event = {
  startDate: string
  endDate: string
  label: string
  type: EventType
}

export interface CalendarSlice {
  events: Event[]
  eventFilter: Event | null
  eventTypeFilters: EventType[]
}

const initialEvents: Event[] = [
  {
    startDate: '2024-01-20',
    endDate: '2024-01-20',
    label: 'I. Robertou birthday',
    type: EventType.People,
  },
  {
    startDate: '2024-01-26',
    endDate: '2024-01-26',
    label: 'Ski trip',
    type: EventType.Activity,
  },
  {
    startDate: '2024-02-14',
    endDate: '2024-02-14',
    label: "Valentine's day",
    type: EventType.People,
  },
  {
    startDate: '2024-04-16',
    endDate: '2024-04-28',
    label: 'Trip to South Korea',
    type: EventType.Travel,
  },
  {
    startDate: '2024-05-25',
    endDate: '2024-05-26',
    label: 'Ele & Max wedding',
    type: EventType.People,
  },
  {
    startDate: '2024-06-09',
    endDate: '2024-06-09',
    label: 'C. Froget birthday',
    type: EventType.People,
  },
  {
    startDate: '2024-08-15',
    endDate: '2024-08-15',
    label: 'J. Robertou birthday',
    type: EventType.People,
  },
  {
    startDate: '2024-08-24',
    endDate: '2024-08-24',
    label: 'Sophie & Jacques dinner',
    type: EventType.People,
  },
  {
    startDate: '2024-09-04',
    endDate: '2024-09-04',
    label: 'A. Picou birthday',
    type: EventType.People,
  },
  {
    startDate: '2024-09-14',
    endDate: '2024-09-14',
    label: 'Acrobranche',
    type: EventType.Activity,
  },
  {
    startDate: '2024-09-18',
    endDate: '2024-09-20',
    label: 'Trip to Lille',
    type: EventType.Travel,
  },
  {
    startDate: '2024-10-25',
    endDate: '2024-10-28',
    label: 'Trip to Paris',
    type: EventType.Travel,
  },
  {
    startDate: '2024-12-12',
    endDate: '2024-12-14',
    label: 'Trip to Paris',
    type: EventType.Travel,
  },
]

const initialState: CalendarSlice = {
  events: initialEvents,
  eventFilter: null,
  eventTypeFilters: [],
}

export const calendarSlice = createSlice({
  name: 'calendarSlice',
  initialState,
  reducers: {
    setEventFilter: (state, action: PayloadAction<Event>) => {
      state.eventTypeFilters = []

      if (isNil(state.eventFilter)) {
        state.eventFilter = action.payload
      } else {
        if (
          state.eventFilter.startDate === action.payload.startDate &&
          state.eventFilter.endDate === action.payload.endDate
        ) {
          state.eventFilter = null
        } else {
          state.eventFilter = action.payload
        }
      }
    },
    setEventTypeFilters: (state, action: PayloadAction<EventType>) => {
      state.eventFilter = null

      if (state.eventTypeFilters.includes(action.payload)) {
        state.eventTypeFilters = [...state.eventTypeFilters].filter(
          (type) => type !== action.payload
        )
      } else {
        state.eventTypeFilters = [...state.eventTypeFilters, action.payload]
      }
    },
  },
})

export const { setEventFilter, setEventTypeFilters } = calendarSlice.actions

export default calendarSlice.reducer
