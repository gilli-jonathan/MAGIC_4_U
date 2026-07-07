import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "../src/Layout/DefaultLayout"
import Home from "../src/Components/Home"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>


          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
