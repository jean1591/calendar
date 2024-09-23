'use client'

import { Event } from '@/app/lib/store/features/calendar/slice'
import { RootState } from '@/app/lib/store/store'
import { classNames } from '@/utils/classNames'
import { eventTypeToColour } from './mappers/eventTypeToColour.mapper'
import { useSelector } from 'react-redux'

//TOODO: put this in backend: return all year as (Event | null)[]
const getAllDaysOfYear = (year: number): string[] => {
  const days: string[] = []
  let date = new Date(year, 0, 1, 6)

  while (date.getFullYear() === year) {
    days.push(date.toISOString().slice(0, 10))
    date.setDate(date.getDate() + 1)
  }

  return days
}

export const Calendar = () => {
  const { events } = useSelector((state: RootState) => state.calendar)

  const today = new Date()
  const currentYear = today.getFullYear()

  const dates = getAllDaysOfYear(currentYear)

  return (
    <div className="space-y-4">
      <p className="text-lg">{events.length} events this year</p>
      <div className="grid grid-flow-col grid-rows-7 gap-[2px]">
        {dates.map((date) => (
          <CalendarCell
            key={date}
            event={events.find(
              (event) =>
                new Date(event.startDate) <= new Date(date) &&
                new Date(date) <= new Date(event.endDate ?? event.startDate)
            )}
          />
        ))}
      </div>
    </div>
  )
}

const CalendarCell = ({ event }: { event?: Event }) => {
  const { eventFilter, eventTypeFilters } = useSelector(
    (state: RootState) => state.calendar
  )

  const isFilteredOut =
    event &&
    ((eventTypeFilters.length && !eventTypeFilters.includes(event.type)) ||
      (eventFilter &&
        eventFilter.startDate !== event.startDate &&
        eventFilter.endDate !== event.endDate))

  const noEventClass = 'bg-slate-900 hover:scale-100'
  const eventClass = (event: Event) =>
    `bg-${eventTypeToColour[event.type]}-300 hover:scale-150`

  return (
    <div
      className={classNames(
        event ? eventClass(event) : noEventClass,
        isFilteredOut ? 'scale-90 opacity-35' : '',
        'h-3 w-3 rounded-sm'
      )}
    />
  )
}
