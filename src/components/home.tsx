import { FC } from "react"
import Recomendation from "./recomendation"
import Testimonial from "./testimonial"
import Map from "./map/map"
import { restaurants } from "../data/restaurants"

interface Props {}

const Home: FC<Props> = () => {
  
  return (
    <div className="flex flex-col">

      <Map restaurants={restaurants} />

      <Recomendation />
      <Testimonial />

    </div>
  )
}

export default Home
