import { ChevronBackIcon } from "../assets/ChevronBackIcon"

interface Props {
  text: string
  backButton?: boolean
  handleClick?: () => void
}

const Title = ({ text, backButton, handleClick }: Props): React.ReactElement => (
  <div className="flex items-center px-4 py-8">
    {backButton && (
      <button
        className="btn mr-4 h-6 w-6 text-2xl"
        onClick={() => {
          if (handleClick) {
            return handleClick()
          }
        }}
      >
        <ChevronBackIcon className="h-full w-full text-mustard-200" />
      </button>
    )}
    <h1 className="grow text-center font-lora text-3xl font-medium uppercase text-white">{text}</h1>
  </div>
)

export default Title
