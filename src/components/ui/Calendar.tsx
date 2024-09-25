import React from "react"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import Button from "@mui/material/Button"
import { Dayjs } from "dayjs"

interface Props {
  setShowCalendar: (e: boolean) => void
  currentTime: Dayjs | null
  setCurrentTime: React.Dispatch<React.SetStateAction<Dayjs | null>>
  onClose: (selectedTime: Dayjs | null) => void
}

const Calendar = ({
  setShowCalendar,
  currentTime,
  setCurrentTime,
  onClose,
}: Props): React.ReactElement => {
  const handleOkClick = () => {
    onClose(currentTime)
  }

  const handleCancelClick = () => {
    setShowCalendar(false)
  }

  const CustomBar = () => (
    <div className="absolute bottom-0 right-0 py-5">
      <Button onClick={handleCancelClick}>Cancel</Button>
      <Button onClick={handleOkClick}>OK</Button>
    </div>
  )

  return (
    <div className="relative mt-4">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker
          value={currentTime}
          onChange={newValue => setCurrentTime(newValue)}
          slots={{
            actionBar: CustomBar,
          }}
        />
      </LocalizationProvider>
    </div>
  )
}

export default Calendar
