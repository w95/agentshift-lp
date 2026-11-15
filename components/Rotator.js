'use client'

import { useEffect, useState } from 'react'

export default function Rotator({ words, interval = 2200 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || words.length < 2) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, interval)

    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <>
      <span className="rotator" aria-hidden="true">
        {words[index]}
      </span>
      <span className="sr-only">{words.join(', ')}</span>
    </>
  )
}
