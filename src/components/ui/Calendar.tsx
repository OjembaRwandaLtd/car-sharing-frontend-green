import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import Button from "@mui/material/Button"
import { useTime } from "../../hooks/useCalendarContext"
import { Dayjs } from "dayjs"

interface Props {
  setShowCalendar: (e: boolean) => void
  onSelectStart: (newTime: Dayjs | null) => void
  onSelectEnd: (newTime: Dayjs | null) => void
  isSelectingStart: boolean
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
})

const Calendar = ({
  setShowCalendar,
  onSelectStart,
  onSelectEnd,
  isSelectingStart,
}: Props): React.ReactElement => {
  const { time, setTime } = useTime()

  const handleOkClick = () => {
    isSelectingStart ? onSelectStart(time) : onSelectEnd(time)
    setShowCalendar(false)
  }

  const handleCancelClick = () => {
    setShowCalendar(false)
  }

  const CustomBar = () => (
    <div className="absolute bottom-0 right-0">
      <Button onClick={handleCancelClick}>Cancel</Button>
      <Button onClick={handleOkClick}>OK</Button>
    </div>
  )

  return (
    <div className="relative mt-4">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            value={time}
            onChange={newValue => setTime(newValue)}
            slots={{
              actionBar: CustomBar,
            }}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  )
}

export default Calendar
