import { FC, ReactNode } from "react"
import Hero from "../components/hero"
import Footer from "../components/footer"

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {

  return (
    <>
      <Hero />
      { children }
      <Footer />
    </>
  )
}

export default Layout
