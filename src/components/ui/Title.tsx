import { useNavigate } from "react-router-dom"
import { ChevronBackIcon } from "../../assets"

interface Props {
  text: string
  backButton?: boolean
}

const Title = ({ text, backButton }: Props): React.ReactElement => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center px-4 py-11">
      {backButton && (
        <button
          className="z-20 mr-4 h-6 w-6 cursor-pointer text-2xl outline-none"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ChevronBackIcon className="h-full w-full text-mustard-200" />
        </button>
      )}
      <h1 className="absolute left-1/2 grow -translate-x-1/2 text-center font-lora text-3xl font-medium uppercase text-white">
        {text}
      </h1>
    </div>
  )
}

export default Title
