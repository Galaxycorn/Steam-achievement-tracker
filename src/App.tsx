import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home';
import Profile from './Page/User/Profile';
import AchievementList from './Page/Achievements/AchievementList';
import { Header } from './Components/Header';
import paths from './Utils/Routes/Paths';
import Config from './Page/User/Config';
import { AchievementGameList } from './Page/Achievements/AchievementGameList';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={paths.home} element={<HomePage />} />
                <Route path={paths.profile} element={<Profile />} />
                <Route path={paths.achievementList} element={<AchievementList />} />
                <Route path={paths.config} element={<Config />} />
                <Route path={paths.gameList} element={<AchievementGameList />} />
            </Routes>
        </Router>
    );
}

export default App;
