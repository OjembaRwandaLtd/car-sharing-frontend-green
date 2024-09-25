import { createContext, ReactElement, useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import dayjs, { Dayjs } from "dayjs"
import Button from "@mui/material/Button"

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

interface Props {
  setShowCalendar: (e: boolean) => void
}

export const TimeContext = createContext<Dayjs | null>(dayjs())

const Calendar = ({ setShowCalendar }: Props): ReactElement => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  const [tempValue, setTempValue] = useState<Dayjs | null>(dayjs())

  // console.log(value.$d.toString())

  const handleOkClick = () => {
    setValue(tempValue)
    setShowCalendar(false)
  }

  const handleCancelClick = () => {
    setTempValue(value)
    setShowCalendar(false)
  }

  const CustomBar = () => (
    <div className=" absolute bottom-0 right-0">
      <Button onClick={handleCancelClick}>Cancel</Button>
      <Button onClick={handleOkClick}>OK</Button>
      {/* Customize other buttons (Clear, Today) if needed */}
    </div>
  )
  return (
    <TimeContext.Provider value={tempValue}>
      <div className="relative mt-4">
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker
              value={value}
              onChange={(newValue: Dayjs | null) => setValue(newValue)}
              slots={{
                actionBar: CustomBar, // Use the "slots" prop to inject custom ActionBar
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </TimeContext.Provider>
  )
}

export default Calendar
