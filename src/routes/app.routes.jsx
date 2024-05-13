import { Routes, Route } from 'react-router-dom';

import Home from "../pages/Home/Home";
import Item from "../pages/Item/Item"

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element= { <Home /> } />
            <Route path="/item/:id" element = { <Item />} />
        </Routes>
    )
}