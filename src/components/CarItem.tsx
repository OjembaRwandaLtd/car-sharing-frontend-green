import { ReactElement } from "react"

import { useCarTypes } from "../hooks"
const CarItem = (): ReactElement => {
  const [{ data, loading, error }] = useCarTypes()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return <div>{data && data.map(item => <img key={item.id} src={item.imageUrl} />)}</div>
}

export default CarItem
