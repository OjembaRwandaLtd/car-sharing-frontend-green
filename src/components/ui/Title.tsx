import { ChevronBackIcon } from "../../assets"

interface Props {
  text: string
  backButton?: boolean
  handleBackClick?: () => void
}

const Title = ({ text, backButton, handleBackClick }: Props): React.ReactElement => (
  <div className="flex items-center px-4 py-8">
    {backButton && (
      <button
        className="z-20 mr-4 h-6 w-6 cursor-pointer text-2xl outline-none"
        onClick={handleBackClick}
        aria-label="Go back"
      >
        <ChevronBackIcon className="h-full w-full text-mustard-200" />
      </button>
    )}
    <h1 className="grow text-center font-lora text-3xl font-medium uppercase text-white">{text}</h1>
  </div>
)

export default Title
