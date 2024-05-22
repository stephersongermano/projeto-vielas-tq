import { Routes, Route } from 'react-router-dom';

import Home from "../pages/Home/Home";
import Collections from '../pages/Collections/Collections';
import Item from "../pages/Item/Item"

export function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element= { <Home /> } />
            <Route path="/item/:id" element = { <Item />} />
            <Route path="/collections" element= { <Collections /> } />
            {/* 
            "/register"
            "/login"
            "/collections" + "/:id"
            "/checkout"
            "/cart"
            "/search" + "?query"
            */}
        </Routes>
    )
}