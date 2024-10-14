import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import NotFound from "./pages/NotFound"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App