import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import UserContributionsPage from "./UserContributionsPage"

function App() {

  return (
    <Routes>
      <Route path="/" index element={<Home />}/>
      <Route path="/:userId" element={<UserContributionsPage />} />
    </Routes>
  )
}

export default App
