import Button from "../ui/Button"
import Calendar from "../ui/Calendar"
import Title from "../ui/Title"

const BookCar = () => (
  <>
    <Title text="BOOK CAR" />
    <section className="font-inter text-white">
      <Calendar label="Start Date" />
      <Calendar label="End Date" />
    </section>
    <div className="mt-20">
      <Button value="Search Available Cars" />
    </div>
  </>
)

export default BookCar
