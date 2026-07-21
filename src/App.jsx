import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "../src/Layout/DefaultLayout"
import Home from "./PAGES/Home"
import ThinkDraw from "./PAGES/Think_draw"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/think_draw" element={<ThinkDraw />}></Route>


          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
