import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react"
import { ReactElement } from "react"
import Button from "./Button"

interface Prop {
  handleDelete?: () => void
  isDialogOpen: boolean
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmDelete = ({ handleDelete, isDialogOpen, setDialogOpen }: Prop): ReactElement => {
  const dialogToggle = () => setDialogOpen(false)
  return (
    <Dialog
      open={isDialogOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={dialogToggle}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              Confirm Delete
            </DialogTitle>
            <p className="mt-2 text-base text-white/50 ">
              Are you sure you want to delete the car?
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <Button value="Cancel" type="outline" width="regular" handleClick={dialogToggle} />
              <Button value="Delete" width="regular" handleClick={handleDelete} />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ConfirmDelete
