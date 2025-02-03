import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Leaderboard from "@/pages/Leaderboard.tsx";
import FriendsPage from "@/pages/Friends.tsx";
import TasksPage from "@/pages/Tasks.tsx";
import WalletSeedInputPage from './pages/ConnectWalletPage';

import React from "react";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="friends" element={<FriendsPage/>}/>
            <Route path="leaderboard" element={<Leaderboard/>}/>
            <Route path="tasks" element={<TasksPage/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/wallet-seed-input" element={<WalletSeedInputPage/>}/>
        </Routes>
    </BrowserRouter>
);

export default App;