import dayjs, { Dayjs } from "dayjs"
import Button from "../ui/Button"
import Calendar from "../ui/Calendar"
import Title from "../ui/Title"
import { useState } from "react"

const BookCar = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs())
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs())

  return (
    <>
      <Title text="BOOK CAR" />
      <section className="font-inter text-white">
        <Calendar label="Start Date" startDate={startDate} setStartDate={setStartDate} />
        <Calendar label="End Date" endDate={endDate} setEndDate={setEndDate} />
      </section>
      <div className="mt-20">
        <Button value="Search Available Cars" />
      </div>
    </>
  )
}

export default BookCar
