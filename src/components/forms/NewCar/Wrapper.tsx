import { ToastContainer } from "react-toastify"
import Title from "../../ui/Title"
import Button from "../../ui/Button"

interface NewCarFormProps {
  children: React.ReactNode
  onSubmit: () => void
  onCancel: () => void
  saveButtonText: string
}
const NewCarFormWrapper = ({ children, onSubmit, onCancel, saveButtonText }: NewCarFormProps) => (
  <form className="px-3 pb-5 md:mx-32 lg:mx-40" autoComplete="off">
    <ToastContainer theme="colored" />
    <Title text="New Car" />
    <div className="grid grid-cols-2 space-y-3">{children}</div>
    <div className="mx-auto mt-24 flex w-fit gap-1">
      <Button width="regular" value="Cancel" type="outline" handleClick={onCancel} />
      <Button width="regular" value={saveButtonText} handleClick={onSubmit} />
    </div>
  </form>
)

export default NewCarFormWrapper
