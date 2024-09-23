'use client'

import {
  EventType,
  setEventTypeFilters,
} from '@/app/lib/store/features/calendar/slice'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'
import { classNames } from '@/utils/classNames'
import { eventTypeToColour } from './mappers/eventTypeToColour.mapper'

export const Filters = () => {
  const { events } = useSelector((state: RootState) => state.calendar)

  const types = events.reduce(
    (acc, current) => {
      const typeExistsInAcc = acc.find(({ label }) => label === current.type)

      if (typeExistsInAcc) {
        typeExistsInAcc.count += 1
      } else {
        acc.push({ label: current.type, count: 1 })
      }

      return acc
    },
    [] as { label: EventType; count: number }[]
  )

  return (
    <div className="flex items-center justify-start gap-4">
      {types.map(({ count, label }) => (
        <FilterButton key={label} count={count} label={label} />
      ))}
    </div>
  )
}

const FilterButton = ({
  label,
  count,
}: {
  label: EventType
  count: number
}) => {
  const dispatch = useDispatch()
  const { eventTypeFilters } = useSelector((state: RootState) => state.calendar)

  const isSelected = eventTypeFilters.includes(label)

  const eventTypeColour = eventTypeToColour[label]
  const colourClass = `border-${eventTypeColour}-300 text-${eventTypeColour}-300`
  const selectedClass = `bg-${eventTypeColour}-100 font-medium bg-opacity-20`

  const handleFilterOnClick = (eventType: EventType) => {
    dispatch(setEventTypeFilters(eventType))
  }

  return (
    <button
      key={label}
      onClick={() => handleFilterOnClick(label)}
      className={classNames(
        colourClass,
        isSelected ? selectedClass : '',
        'rounded-lg border-[2px] px-4 py-1 text-base'
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <p className="capitalize">{label}</p>
        <p
          className={`flex h-4 w-4 items-center justify-center rounded-full border-[1px] text-xs ${colourClass}`}
        >
          {count}
        </p>
      </div>
    </button>
  )
}
