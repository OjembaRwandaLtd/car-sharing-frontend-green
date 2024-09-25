import { useState } from "react"
import Button from "../ui/Button"
import Calendar from "../ui/Calendar"
import Title from "../ui/Title"
import { useTime } from "../../hooks/useCalendarContext"
import dayjs, { Dayjs } from "dayjs"

const BookCar = () => {
  const { time } = useTime()
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentTime, setCurrentTime] = useState(time)
  const [startDate, setStartDate] = useState(time)
  const [endDate, setEndDate] = useState(time)
  const [isSettingStartDate, setIsSettingStartDate] = useState(true)

  const handleClick = (isStart: boolean) => {
    setIsSettingStartDate(isStart)
    setShowCalendar(true)
  }

  const handleCalendarClose = (selectedTime: Dayjs | null) => {
    if (isSettingStartDate) setStartDate(selectedTime)
    else setEndDate(selectedTime)
    setShowCalendar(false)
  }

  const formatDate = (date: Dayjs | null) => dayjs(date).format("YYYY-MM-DD HH:mm")

  return (
    <>
      {showCalendar ? (
        <Calendar
          setShowCalendar={setShowCalendar}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          onClose={handleCalendarClose}
        />
      ) : (
        <section>
          <Title text="BOOK CAR" />
          <form className="mt-20 flex flex-col justify-center gap-2">
            <label htmlFor="start-date" className="font-inter text-sm text-white">
              Start date
            </label>
            <div className="input">
              <input
                type="text"
                id="start-date"
                placeholder="YYYY-MM-DD HH:mm"
                className="w-72"
                name="startTime"
                value={formatDate(startDate)}
                onClick={() => handleClick(true)}
                readOnly
              />
            </div>
            <label htmlFor="end-date" className="font-inter text-sm text-white">
              End date
            </label>
            <div className="input">
              <input
                type="text"
                id="end-date"
                placeholder="YYYY-MM-DD HH:mm"
                className="w-72"
                name="endTime"
                value={formatDate(endDate)}
                onClick={() => handleClick(false)}
                readOnly
              />
            </div>
            <div className="mt-20">
              <Button value="Search Available Cars" />
            </div>
          </form>
        </section>
      )}
    </>
  )
}

export default BookCar
