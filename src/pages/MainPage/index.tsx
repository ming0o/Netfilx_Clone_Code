import React from 'react';
import Header from '~/components/Header/Header';
//import Footer from '~/components/Footer/Footer';
import * as S from './Styles';

function MainPage() {
    return (
        <>
        <Header/>
        <S.Layout>
            <S.MainPic>

            </S.MainPic>
            {/* <S.MainWrap>
                <S.MainPic>
                    <img class="main-pic" alt="날씨의 아이" title="홈으로 이동"/>
                </S.MainPic>
            </S.MainWrap> 
            <Footer/> */}
        </S.Layout>
        </>
    );
}

export default MainPage;
