import { useContext, useState } from "react"
import Button from "../ui/Button"
import Calendar, { TimeContext } from "../ui/Calendar"
import Title from "../ui/Title"
import { Dayjs } from "dayjs"

interface Props {
  startTime: Dayjs | null
  endTime: Dayjs | null
}

const BookCar = () => {
  const time = useContext(TimeContext)
  const [showCalendar, setShowCalendar] = useState(false)
  const [inputValue, setInputValue] = useState<Props>({
    startTime: time,
    endTime: time,
  })
  console.log(time?.format("YYYY-MM-DD HH:mm"))

  const handleClick = () => {
    setShowCalendar(prev => !prev)
  }

  const handleChange = ({ target: { name } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(prevData => ({ ...prevData, [name]: time }))
  }

  return (
    <>
      {showCalendar ? (
        <Calendar setShowCalendar={setShowCalendar} />
      ) : (
        <section>
          <Title text="BOOK CAR" />
          <form className=" mt-20 flex flex-col justify-center gap-2">
            <label htmlFor="start date" className="font-inter text-sm text-white">
              Start date
            </label>
            <div className="input">
              <input
                type="text"
                id="start-date"
                placeholder="06/07/2023 01:07 PM"
                value={inputValue.startTime ? inputValue.startTime.format("YYYY-MM-DD HH:mm") : ""}
                className="w-72"
                name="start-date"
                onChange={handleChange}
                onClick={handleClick}
              />
            </div>
            <label className="font-inter text-sm text-white"> End date</label>
            <div className="input">
              <input
                type="text"
                id="end-date"
                placeholder="06/07/2023 01:07 PM"
                value={inputValue.endTime ? inputValue.endTime.format("YYYY-MM-DD HH:mm") : ""}
                className="w-72"
                name="end-date"
                onClick={handleClick}
                onChange={handleChange}
              />
            </div>
            <div className="mt-20">
              <Button value=" Search Available Cars" />
            </div>
          </form>
        </section>
      )}
    </>
  )
}

export default BookCar
