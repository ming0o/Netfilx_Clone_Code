import React, { useState } from 'react';
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile_pic.png"
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import * as S from './Styles';

function Header() {
    const [isHovered, setIsHovered] = useState(false);

    const navigationItems = [
        { path: '/Home', label: '홈' },
        { path: '#', label: '시리즈' },
        { path: '#', label: '영화' },
        { path: '#', label: 'NEW! 요즘 대세 콘텐츠' },
        { path: '#', label: '내가 찜한 콘텐츠' },
        { path: '#', label: '언어별로 찾아보기' }
    ];

    const handleIconHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <S.MainHeader>
            <img src={logo} alt="Netflix" style={{ width: 100 + "px", marginRight: 20 + "px" }} />
            <S.MenuNavigation>
                <S.NavigationTab>
                    {navigationItems.map((item, index) => (
                        <span key={index}>{item.label}</span>
                    ))}
                </S.NavigationTab>
                <S.NavGroup>
                    <IoSearchOutline size={24} />
                    <S.SmallText>키즈</S.SmallText>
                    <FaRegBell size={24} />
                    <S.Profile onMouseEnter={handleIconHover} onMouseLeave={handleIconHover}>
                        <img src={profile} alt="Profile" />
                        {isHovered ? <GoTriangleUp size={24} /> : <GoTriangleDown size={24} />}
                    </S.Profile>
                </S.NavGroup>
            </S.MenuNavigation>
        </S.MainHeader>
    );
};

export default Header;
