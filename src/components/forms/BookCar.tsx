import React, { useState } from "react"
import Button from "../ui/Button"
import Calendar from "../ui/Calendar"
import Title from "../ui/Title"
import { useTime } from "../../hooks/useCalendarContext"
import { Dayjs } from "dayjs"

const BookCar = () => {
  const { time } = useTime()
  const [showCalendar, setShowCalendar] = useState(false)
  // const [setStart, setSelectStart] = useState(false)
  const [inputValue, setInputValue] = useState({
    startTime: time,
    endTime: time,
  })

  const handleClick = () => {
    setShowCalendar(prev => !prev)
  }

  const handleDateChange = (name: string, newTime: Dayjs | null) => {
    setInputValue(prevData => ({ ...prevData, [name]: newTime }))
  }

  const handleInputChange = ({ target: { name } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(prevData => ({ ...prevData, [name]: time }))
  }

  return (
    <>
      {showCalendar ? (
        <Calendar
          setShowCalendar={setShowCalendar}
          onSelectStart={newTime => handleDateChange("startTime", newTime)}
          onSelectEnd={newTime => handleDateChange("endTime", newTime)}
          isSelectingStart
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
                value={inputValue.startTime ? inputValue.startTime.format("YYYY-MM-DD HH:mm") : ""}
                className="w-72"
                name="startTime"
                onInput={handleInputChange}
                onClick={handleClick}
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
                value={inputValue.endTime ? inputValue.endTime.format("YYYY-MM-DD HH:mm") : ""}
                className="w-72"
                name="endTime"
                onClick={handleClick}
                onChange={handleInputChange}
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
