import dayjs from "dayjs"

const useFormatDate = (date: Date): { date: string; time: string } => ({
  date: dayjs(date).format("DD MMM YYYY"),
  time: dayjs(date).format("HH:mm"),
})

export default useFormatDate
