import { millisecondsInDay } from '../consts/milliseconds-in-day'

export const calculatePassedDays = (date: string): number => {
  const releaseTime = Date.parse(date)
  const currentTime = Date.now()
  const daysPassed = Math.round((currentTime - releaseTime) / millisecondsInDay)

  return daysPassed
}
