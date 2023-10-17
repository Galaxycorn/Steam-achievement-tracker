import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import paths from '../Utils/Routes/Paths';

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
            <StyledLink to={paths.home}>Home</StyledLink>
            <StyledLink to={paths.profile}>Profile</StyledLink>
            <StyledLink to={paths.achievementList}>Game info</StyledLink>
            <StyledLink to={paths.config}>Config</StyledLink>
        </NavContainer>
    );
}
