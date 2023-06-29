
import Home from "./navigatingItems/Home";
import MyInfo from "./navigatingItems/MyInfo";
import PicSearch from "./navigatingItems/PicSearch";
import Thoughts from "./navigatingItems/Thoughts";
import Header from "./nav/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Navigator = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/myInfo' element={<MyInfo />}></Route>
                    <Route path='/thoughts' element={<Thoughts />}></Route>
                    <Route path='/picSearch' element={<PicSearch />}></Route>
                </Routes>
            </BrowserRouter>

        </div>

    )
};

export default Navigator;