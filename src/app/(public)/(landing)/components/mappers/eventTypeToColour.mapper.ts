import { EventType } from '@/app/lib/store/features/calendar/slice'

export const eventTypeToColour = {
  [EventType.Activity]: 'blue',
  [EventType.People]: 'orange',
  [EventType.Travel]: 'green',
}
