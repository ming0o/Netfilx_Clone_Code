import styled from 'styled-components';

export const MainHeader = styled.div`
    display: flex;
    width: 100%;
    top: 0;
    align-items: center;
    padding: 0;
    z-index: 2;
`;

export const MenuNavigation = styled.div`
    display: flex;
    width: 90%;
    margin: 0;
    padding: 0;
`;

export const NavigationTab = styled.button`
    display: flex;
    width: 70%;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    margin-right: auto;
    
    span {
        margin-right: 18px;
    }
`;

export const NavGroup = styled.div`
    display: flex;
    width: 30%;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    right: 0;
    margin-left: auto;

    & > * {
        margin-right: 20px;
    }
`;

export const SmallText = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 10px;
    }
`
