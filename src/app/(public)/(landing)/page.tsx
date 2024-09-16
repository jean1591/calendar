enum BgColour {
  Green = 'bg-green-600',
  LightSlate = 'bg-slate-800',
  DarkSlate = 'bg-slate-900',
}

const getDateClass = (today: Date, date: Date): BgColour => {
  if (date.toDateString() === today.toDateString()) {
    return BgColour.Green
  } else if (date < today) {
    return BgColour.LightSlate
  } else {
    return BgColour.DarkSlate
  }
}

const getAllDaysOfYear = (year: number): string[] => {
  const days: string[] = []
  let date = new Date(year, 0, 1)

  while (date.getFullYear() === year) {
    days.push(date.toISOString())
    date.setDate(date.getDate() + 1)
  }

  return days
}

export default function LandingPage() {
  const today = new Date()
  const currentYear = today.getFullYear()

  const dates = getAllDaysOfYear(currentYear)

  return (
    <div className="grid grid-flow-col grid-rows-7 gap-1">
      {dates.map((date) => (
        <div
          key={date}
          className={`h-4 w-4 rounded-sm ${getDateClass(today, new Date(date))}`}
        />
      ))}
    </div>
  )
}

export const revalidate = 3600 * 24
