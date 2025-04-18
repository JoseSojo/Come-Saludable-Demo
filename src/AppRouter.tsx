import { FC } from "react"
import { Route, Switch } from "wouter"
import Layout from "./templates/layout"
import Home from "./components/home"
import Login from "./pages/loginPage"
import Restaurants from "./pages/restaurants"
import RestaurantsDetails from "./pages/restaurantsDetais"
import LayoutDashboard from "./templates/LayoutDashboard"
import Dashboard from "./pages/dashboard"
import Analitic from "./pages/analitic"
import Report from "./pages/report"
import Menu from "./pages/menu"
import Profile from "./pages/profile"

const AppRouter: FC = () => {

  return (
    <Switch>
      <Route path="/"><Layout><Home /></Layout></Route>
      <Route path="/restaurants"><Layout><Restaurants /></Layout></Route>
      <Route path="/restaurant/:id"><><RestaurantsDetails /></></Route>
      <Route path="/dashboard"><LayoutDashboard><Dashboard /></LayoutDashboard></Route>
      <Route path="/dashboard/analytics"><LayoutDashboard><Analitic /></LayoutDashboard></Route>
      <Route path="/dashboard/menu"><LayoutDashboard><Menu /></LayoutDashboard></Route>
      <Route path="/dashboard/report"><LayoutDashboard><Report /></LayoutDashboard></Route>
      <Route path="/dashboard/profile"><LayoutDashboard><Profile edit /></LayoutDashboard></Route>
      <Route path="/login"><Login /></Route>

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  )
}

export default AppRouter
