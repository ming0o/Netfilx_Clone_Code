import styled from 'styled-components';

export const Footerbody = styled.div`
    color: grey;
    margin: 20px auto 0;
    max-width: 980px;
    padding: 0 4%;
`;

export const SocialLinks = styled.div`
    display: flex;
    margin-bottom: 1rem;
    margin-right: 15px;
`;

export const FooterLink = styled.a`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
`;

export const ServiceCode = styled.div`
    line-height: 1.4;
`;

export const ServiceCodeBox = styled.button`
    font-size: 13px;
    margin-bottom: 20px;
    padding: 0.5em;
    background: transparent;
    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    -webkit-appearance: button;
    text-transform: none;
    overflow: visible;
    font: inherit;
    margin: 0;
`;

export const FooterCopyright = styled.div`
    display: flex;
    font-size: 11px;
    margin-bottom: 15px;
`;

export const FooterList = styled.ul`
    list-style-type: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

export const FooterListItem = styled.li`
    display: list-item;
`;

export const FooterGuides = styled.div`
    box-sizing: border-box;
    flex: 0 0 50%;
    list-style-type: none;
    margin-bottom: 16px;
    @media screen and (min-width: 800px){
        flex-basis: 25%;
    }
`;

export const FooterGuideLink = styled.a`
    color: grey;
    text-decoration: none;
`;
