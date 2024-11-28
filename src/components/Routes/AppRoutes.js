import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Event from "../pages/Event";
import Participant from "../pages/Participant";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Participant" element={<Participant />} />

        </Routes>
    );

}

export default AppRoutes