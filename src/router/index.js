import { Routes, Route } from "react-router-dom";
import { Home, Detail, Cart } from "../pages";
import { Card } from "../components";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
            <Route path="/piel" element={<Home categoria={1}></Home>} />
            <Route path="/ojos" element={<Home categoria={2}></Home>} />
            <Route path="/cara" element={<Home categoria={3}></Home>} />
        </Routes>
    )
} 

export default Router;