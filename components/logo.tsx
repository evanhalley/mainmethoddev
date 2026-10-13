import * as React from "react"

import { cn } from "@/lib/utils"

// "Origin" mark: an M drawn as one line that starts from a dot (the entry point).
// The viewBox is cropped tight to the drawing so it can sit inline next to text.
function Logo({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="logo"
      viewBox="9 13 79 80"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M22 80 V22 L50 57 L78 22 V80"
        fill="none"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="22" cy="80" r="11" className="fill-brand" />
    </svg>
  )
}

export { Logo }
