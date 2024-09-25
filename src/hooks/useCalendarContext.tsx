// CalendarContext.tsx
import React, { createContext, useState, useContext } from "react"
import dayjs, { Dayjs } from "dayjs"

interface TimeContextType {
  time: Dayjs | null
  setTime: React.Dispatch<React.SetStateAction<Dayjs | null>>
}

const TimeContext = createContext<TimeContextType | undefined>(undefined)

export const TimeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [time, setTime] = useState<Dayjs | null>(dayjs())
  return <TimeContext.Provider value={{ time, setTime }}>{children}</TimeContext.Provider>
}

export const useTime = () => {
  const context = useContext(TimeContext)
  if (context === undefined) {
    throw new Error("useTime must be used within a TimeProvider")
  }
  return context
}
