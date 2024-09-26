import { Dayjs } from "dayjs"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"

interface Props {
  label: string
  startDate?: Dayjs | null
  setStartDate?: React.Dispatch<React.SetStateAction<Dayjs | null>>
  endDate?: Dayjs | null
  setEndDate?: React.Dispatch<React.SetStateAction<Dayjs | null>>
}

export default function Calendar({ label, startDate, endDate, setEndDate, setStartDate }: Props) {
  const pickerStyles = {
    "& .MuiInputBase-root": {
      color: "white",
      paddingLeft: "10px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  }
  const handleInputChange = (date: Dayjs | null) => {
    if (startDate && setStartDate) setStartDate(date)
    else if (endDate && setEndDate) setEndDate(date)
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={""}>
        <DemoContainer
          components={[
            "DateTimePicker",
            "MobileDateTimePicker",
            "DesktopDateTimePicker",
            "StaticDateTimePicker",
          ]}
        >
          <DemoItem label={label}>
            <MobileDateTimePicker
              defaultValue={startDate || endDate}
              sx={pickerStyles}
              onChange={e => handleInputChange(e)}
              minDate={startDate || endDate || undefined}
              className={"rounded-full bg-primary-200"}
            />
          </DemoItem>
        </DemoContainer>
      </div>
    </LocalizationProvider>
  )
}
