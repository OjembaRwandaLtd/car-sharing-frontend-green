import { useState } from "react"
import Button from "../ui/Button"
import Calendar from "../ui/Calendar"
import Title from "../ui/Title"

// const INITIAL_VALUES = {
//   startTime: dayjs()?.$d,
//   endTime: dayjs()?.$d,
// }

const BookCar = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  // const [inputValue, setInputValue] = useState(INITIAL_VALUES)

  const handleClick = () => {
    setShowCalendar(prev => !prev)
  }
  // const time = useContext(TimeContext)
  // console.log(dayjs().$d)

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
                // value={inputValue}
                className="w-72"
                name="start-date"
                //   onChange={handleChange}
                onClick={handleClick}
              />
            </div>
            <label className="font-inter text-sm text-white"> End date</label>
            <div className="input">
              <input
                type="text"
                id="end-date"
                placeholder="06/07/2023 01:07 PM"
                //   value={formData.username}
                className="w-72"
                name="end-date"
                onClick={handleClick}
                //   onChange={handleChange}s
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
