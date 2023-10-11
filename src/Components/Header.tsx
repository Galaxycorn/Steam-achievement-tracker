import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
    padding: 10px 15px;
    color: black;
    text-decoration: none;
    font-size: 18px;
    text-align: center;
    border-radius: 30px;
`;

export function Header() {
    return (
        <NavContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Profile">Profile</StyledLink>
            <StyledLink to="/GameAchievementList">Game info</StyledLink>
        </NavContainer>
    );
}
