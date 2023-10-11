import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/Profile">Go to your profile</Link>
        </div>
    );
}

export default Home;
