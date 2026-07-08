export default function TechnicalBackground({ variant = 'circuit' }) {
  if (variant === 'nodes') {
    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.06 }}>
        <defs>
          <pattern id="nodes" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="2" fill="#4CAF50" />
            <circle cx="20" cy="30" r="1.5" fill="#4CAF50" />
            <circle cx="100" cy="80" r="1.5" fill="#4CAF50" />
            <circle cx="40" cy="100" r="1" fill="#4CAF50" />
            <circle cx="80" cy="20" r="1" fill="#4CAF50" />
            <line x1="60" y1="60" x2="20" y2="30" stroke="#4CAF50" strokeWidth="0.5" />
            <line x1="60" y1="60" x2="100" y2="80" stroke="#4CAF50" strokeWidth="0.5" />
            <line x1="60" y1="60" x2="40" y2="100" stroke="#4CAF50" strokeWidth="0.5" />
            <line x1="60" y1="60" x2="80" y2="20" stroke="#4CAF50" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nodes)" />
      </svg>
    )
  }

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.05 }}>
      <defs>
        <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M40 0v20M40 60v20M0 40h20M60 40h20" stroke="#4CAF50" strokeWidth="0.5" fill="none" />
          <circle cx="40" cy="20" r="2" fill="#4CAF50" />
          <circle cx="40" cy="60" r="2" fill="#4CAF50" />
          <circle cx="20" cy="40" r="2" fill="#4CAF50" />
          <circle cx="60" cy="40" r="2" fill="#4CAF50" />
          <path d="M20 40l20-20M60 40L40 20M20 40l20 20M60 40L40 60" stroke="#4CAF50" strokeWidth="0.3" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  )
}
