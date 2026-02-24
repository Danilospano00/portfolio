interface TagProps {
  label: string
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="font-mono text-xs text-orange-primary bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.2)] px-2.5 py-1 rounded-md">
      {label}
    </span>
  )
}
