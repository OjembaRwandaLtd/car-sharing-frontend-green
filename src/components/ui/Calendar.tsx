import React, { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import dayjs, { Dayjs } from "dayjs"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  // Add more theme customizations as needed
})

const App: React.FC = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs())
  console.log(value)

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateTimePicker value={value} onChange={newValue => setValue(newValue)} />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
