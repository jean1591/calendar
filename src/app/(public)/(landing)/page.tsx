import { Calendar } from './components/Calendar'
import { Filters } from './components/Filters'
import { ListEvents } from './components/ListEvents'
import { Stats } from './components/Stats'

export default function LandingPage() {
  return (
    <div className="space-y-20">
      <Stats />

      <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <Filters />
          <Calendar />
        </div>

        <ListEvents />
      </div>
    </div>
  )
}
