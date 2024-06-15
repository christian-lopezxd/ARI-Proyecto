import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import JsonToTxt from "../Pages/JsonToTxt";
import Lobby from "../Pages/Lobby";
import TxtToJson from "../Pages/TxtToJson";

const MainRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/txtToJson" element={<TxtToJson />} />
            <Route path="/jsonToTxt" element={<JsonToTxt />} />
            <Route path="/*" element={<Lobby />} />
        </Routes>
        </BrowserRouter>
    );
    }

export default MainRouter;