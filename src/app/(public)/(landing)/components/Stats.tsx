// TODO: number of travel days

export const Stats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Stat value="234" label="some stat" />
      <Stat value="234" label="some stat" />
      <Stat value="234" label="some stat" />
    </div>
  )
}

const Stat = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="rounded-xl border-[2px] border-slate-500 bg-gray-900 p-4">
      <p className="text-xl font-bold tracking-tight">{value}</p>
      <p className="text-sm uppercase text-gray-500">{label}</p>
    </div>
  )
}
