import {BrowserRouter, Routes, Route} from "react-router-dom"
import Heroes from "../component/Heroes"
import HeroeDetails from "../component/HeroeDetails"

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Heroes/>} />
            <Route path="heroe/:id" element={<HeroeDetails/>} />
        </Routes>
        
        </BrowserRouter>
    )
}

export default Router