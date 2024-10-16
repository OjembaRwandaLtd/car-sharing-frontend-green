import { ReactElement, useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import Button from "../ui/Button"
import Title from "../ui/Title"
import { useNavigate } from "react-router-dom"
import Routes from "../../routes"
import Calendar from "../ui/Calendar"

const BookCar = (): ReactElement => {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs())
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(1, "day"))

  const handleClick = () =>
    navigate(`${Routes.CARS.AVAILABLE}?startdate=${startDate}&enddate=${endDate}`)

  return (
    <>
      <Title text="BOOK CAR" />
      <section className="font-inter text-white">
        <Calendar label="Start Date" startDate={startDate} setStartDate={setStartDate} />
        <Calendar label="End Date" endDate={endDate} setEndDate={setEndDate} />
      </section>
      <div className="mt-20">
        <Button text="Search Available Cars" onClick={handleClick} />
      </div>
    </>
  )
}

export default BookCar
