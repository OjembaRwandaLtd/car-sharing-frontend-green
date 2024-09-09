import { ReactElement } from "react"
import Title from "../../components/ui/Title"
import InputField from "../../components/ui/InputField"
import Button from "../../components/ui/Button"

const AddNewCar: React.FC = (): ReactElement => (
  <section className="flex flex-col items-center px-3 pb-5">
    <Title text="new car" />
    <InputField title={"Name"} placeholder={"e.g. My Nice Moni Car"} />
    <InputField title={"Type"} placeholder={"Moni Cooper"} dropdownData={["kami", "debora"]} />
    <div className="flex gap-1">
      <InputField title={"License Plate"} placeholder={"e.g. M-XY 123"} />
      <InputField title={"Horse Power"} placeholder={"110"} />
    </div>
    <InputField title={"Fuel type"} placeholder={"e.g. 150"} dropdownData={["kami", "debora"]} />
    <InputField title={"Additional Information"} placeholder={"e.g. No smoking"} />
    <div className="mt-32 flex gap-1">
      <Button width="regular" value="Cancel" type="outline" />
      <Button width="regular" value="Add Car" />
    </div>
  </section>
)
export default AddNewCar
