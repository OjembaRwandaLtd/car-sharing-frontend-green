import isBetween from "dayjs/plugin/isBetween"
import dayjs, { Dayjs } from "dayjs"

dayjs.extend(isBetween)

const useDateBetween = (startDate: Dayjs, endDate: Dayjs) => dayjs().isBetween(startDate, endDate)

export default useDateBetween
