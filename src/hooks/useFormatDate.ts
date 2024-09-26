import dayjs from "dayjs"

const useFormatDate = (date: string) => ({
  date: dayjs(date).format("DD MMM YYYY"),
  time: dayjs(date).format("HH:mm"),
})

export default useFormatDate
