import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home';
import Profile from './User/Profile';
import AchievementList from './Page/AchievementList';
import { Header } from './Components/Header';
import paths from './Utils/Routes/Paths';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={paths.home} element={<HomePage />} />
                <Route path={paths.profile} element={<Profile />} />
                <Route path={paths.achievementList} element={<AchievementList />} />
            </Routes>
        </Router>
    );
}

export default App;
