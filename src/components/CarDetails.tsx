import { useCarTypes } from '../hooks'

const CarDetails: React.FC = () => {
  const [{ data, loading, error }] = useCarTypes()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div>
      {data && (
        <>
          <img src={data[2].imageUrl} alt="my car" />
        </>
      )}
    </div>
  )
}

export default CarDetails
