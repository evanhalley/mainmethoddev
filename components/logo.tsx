import * as React from "react"

import { cn } from "@/lib/utils"

// "Origin" mark: an M drawn as one line that starts from a dot (the entry point).
function MarkPaths({ stroke = 15, dot = 11 }: { stroke?: number; dot?: number }) {
  return (
    <>
      <path
        d="M22 80 V22 L50 57 L78 22 V80"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="22" cy="80" r={dot} className="fill-brand" />
    </>
  )
}

// Standalone mark, cropped tight to the drawing with a little breathing room.
function Logo({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="logo"
      viewBox="9 13 79 80"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <MarkPaths />
    </svg>
  )
}

// The mark set as the capital M of a word in Geist Bold. It is drawn a little
// heavier to match the font's stems. The legs (y 13.5 to 88.5, 75 units) span
// one cap height (0.71em), so they sit on the baseline and the dot dips below it.
function LogoLetter({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      data-slot="logo-letter"
      viewBox="9.5 13.5 77 79"
      aria-hidden="true"
      className={cn(
        "inline-block h-[0.748em] w-auto align-[-0.038em] mr-[0.06em]",
        className
      )}
      {...props}
    >
      <MarkPaths stroke={17} dot={12.5} />
    </svg>
  )
}

export { Logo, LogoLetter }
