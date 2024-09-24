import Button from "../ui/Button"
import Calendar from "../ui/Calendar"
import Title from "../ui/Title"

const BookCar = () => (
  <section>
    <Title text="BOOK CAR" />
    <form className=" mt-20 flex flex-col justify-center gap-2">
      <label htmlFor="start date" className="font-inter text-sm text-white">
        Start date
      </label>
      <div className="input">
        <input
          type="text"
          id="username"
          placeholder="06/07/2023 01:07 PM"
          //   value={formData.username}
          className="w-72"
          name="username"
          //   onChange={handleChange}
        />
      </div>
      <label className="font-inter text-sm text-white"> End date</label>
      <div className="input">
        <input
          type="text"
          id="username"
          placeholder="06/07/2023 01:07 PM"
          //   value={formData.username}
          className="w-72"
          name="username"
          //   onChange={handleChange}s
        />
      </div>
      <div className="mt-20">
        <Button value=" Search Available Cars" />
      </div>
    </form>
    <Calendar />
  </section>
)

export default BookCar
