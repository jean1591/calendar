'use client'

import { Event, setEventFilter } from '@/app/lib/store/features/calendar/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'
import { classNames } from '@/utils/classNames'
import { eventTypeToColour } from './mappers/eventTypeToColour.mapper'

export const ListEvents = () => {
  const { events } = useSelector((state: RootState) => state.calendar)

  return (
    <div className="max-h-96 space-y-2 overflow-scroll">
      {events.map((event) => (
        <EventItem key={event.startDate} event={event} />
      ))}
    </div>
  )
}

const EventItem = ({ event }: { event: Event }) => {
  const dispatch = useDispatch()
  const { eventFilter, eventTypeFilters } = useSelector(
    (state: RootState) => state.calendar
  )

  const { startDate, endDate, label, type } = event

  const isFilteredOut =
    event &&
    ((eventTypeFilters.length && !eventTypeFilters.includes(event.type)) ||
      (eventFilter &&
        eventFilter.startDate !== event.startDate &&
        eventFilter.endDate !== event.endDate))

  const eventTypeColour = eventTypeToColour[type]
  const colourClass = `border-${eventTypeColour}-300 text-${eventTypeColour}-300`

  return (
    <div
      key={startDate}
      onClick={() => dispatch(setEventFilter(event))}
      className={classNames(
        isFilteredOut ? 'opacity-35' : '',
        'cursor-pointer'
      )}
    >
      <div className="flex items-center justify-start gap-x-1">
        <p className="text-xs text-gray-500">{startDate}</p>
        {endDate && <p className="text-xs text-gray-500">- {endDate}</p>}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium tracking-tight">{label}</p>
        <p
          className={classNames(
            colourClass,
            `rounded-lg border-[2px] px-2 py-1 text-xs`
          )}
        >
          {type}
        </p>
      </div>
    </div>
  )
}
