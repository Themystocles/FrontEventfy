import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FormEvent from "../pages/Events/FormEvent";
import ListEvents from "../pages/Events/ListEvents";
import ListLocal from "../pages/Local/ListLocal";
import ListParticipant from "../pages/Participant/ListParticipant";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListEvents" element={<ListEvents />} />
            <Route path="/FormEvent" element={<FormEvent />} />
            <Route path="/ListParticipant" element={<ListParticipant />} />
            <Route path="/ListLocals" element={<ListLocal />} />

        </Routes>
    );

}

export default AppRoutes