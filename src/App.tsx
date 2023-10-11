import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Page/Home';
import Profile from './User/Profile';
import AchievementList from './Page/AchievementList';
import { Header } from './Components/Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/GameAchievementList" element={<AchievementList />} />
            </Routes>
        </Router>
    );
}

export default App;
