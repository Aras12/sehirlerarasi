export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Truck body */}
      <rect x="2" y="16" width="28" height="16" rx="2" fill="#1d4ed8"/>
      {/* Cabin */}
      <path d="M30 20 L38 20 L42 26 L42 32 L30 32 Z" fill="#1e3a8a"/>
      {/* Window */}
      <path d="M32 21 L37 21 L40 26 L32 26 Z" fill="#bfdbfe"/>
      {/* Wheels */}
      <circle cx="12" cy="34" r="4" fill="#1e3a8a"/>
      <circle cx="12" cy="34" r="2" fill="#eab308"/>
      <circle cx="36" cy="34" r="4" fill="#1e3a8a"/>
      <circle cx="36" cy="34" r="2" fill="#eab308"/>
      {/* Box on truck */}
      <rect x="6" y="10" width="12" height="8" rx="1" fill="#eab308"/>
      <rect x="20" y="12" width="8" height="6" rx="1" fill="#facc15"/>
      {/* Arrow/road */}
      <path d="M4 42 L44 42" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3"/>
    </svg>
  )
}
