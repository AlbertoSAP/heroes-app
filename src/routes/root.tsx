import {BrowserRouter, Routes, Route} from "react-router-dom"
import Heroes from "../component/Heroes"

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Heroes/>} />
        </Routes>
        
        </BrowserRouter>
    )
}

export default Router