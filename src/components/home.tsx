import { FC } from "react"
import Recomendation from "./recomendation"
import Testimonial from "./testimonial"

interface Props {}

const Home: FC<Props> = () => {

  return (
    <div className="flex flex-col">

      <Recomendation />
      <Testimonial />

    </div>
  )
}

export default Home
