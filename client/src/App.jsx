import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Selection from "./pages/Selection";
import Game from "./pages/Game";
import LeaderBoards from "./pages/LeaderBoards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




export default function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/selection" element={<Selection />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/leaderBoards" element={<LeaderBoards />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}