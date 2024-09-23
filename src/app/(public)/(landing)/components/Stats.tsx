'use client'

import { Event, EventType } from '@/app/lib/store/features/calendar/slice'

import { RootState } from '@/app/lib/store/store'
import { differenceInCalendarDays } from 'date-fns'
import { useSelector } from 'react-redux'

const getNumberOfDaysTraveled = (events: Event[]): number => {
  const travelEvents = events.filter(({ type }) => type === EventType.Travel)

  return travelEvents.reduce((acc, current) => {
    return (
      acc + differenceInCalendarDays(current.endDate, current.startDate) + 1
    )
  }, 0)
}

export const Stats = () => {
  const { events } = useSelector((state: RootState) => state.calendar)
  const daysTraveled = getNumberOfDaysTraveled(events)

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Stat value={daysTraveled.toString()} label="days traveled" />
      <Stat value="234" label="some stat" />
      <Stat value="234" label="some stat" />
    </div>
  )
}

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="rounded-xl border-[2px] border-gray-500 bg-gray-900 p-4">
      <p className="text-xl font-bold tracking-tight">{value}</p>
      <p className="text-sm uppercase text-gray-500">{label}</p>
    </div>
  )
}
