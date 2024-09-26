import dayjs from "dayjs"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"

export default function Calendar({ label }: { label: string }) {
  const pickerStyles = {
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
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
              defaultValue={dayjs("2022-04-17T15:30")}
              sx={pickerStyles}
              className={"rounded-full bg-primary-200"}
            />
          </DemoItem>
        </DemoContainer>
      </div>
    </LocalizationProvider>
  )
}
