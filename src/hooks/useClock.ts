import { useEffect, useState } from 'react'

export function useClock(): Date {
  const [currentDate, setCurrentDate] = useState(() => new Date())

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return currentDate
}
