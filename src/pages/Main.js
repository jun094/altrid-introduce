import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import SectionFrame from '../components/SectionFrame';
import Section1 from '../components/MainSections/Section1';
import Section2 from '../components/MainSections/Section2';
import Section3 from '../components/MainSections/Section3';
import Section4 from '../components/MainSections/Section4';
import Section5 from '../components/MainSections/Section5';
import Section6 from '../components/MainSections/Section6';
import BannerMatrios from '../components/BannerMatrios';
import BannerFreeTrial from '../components/BannerFreeTrial';
import styled from 'styled-components';

const SectionFrame = styled.section`
    background: ${(props) => (props['background-url'] ? `url('${props['background-url']}')` : null)};
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    padding: 32px;
    @media (max-width: 600px) {
        padding: 16px;
    }
`;

function Main() {
    // useEffect(() => {
    //     window.analytics.logEvent('메인 페이지 접속');
    // }, []);

    return (
        <>
            <Helmet>
                <title>Altrid, 당신만의 학습 관리 시스템 | 모든 것을 관찰하고 기록합니다.</title>
            </Helmet>
            <SectionFrame background-url="/bg_images/frame_1_bg.svg">
                <Section1 />
            </SectionFrame>
        </>
    );

    return (
        <>
            <Helmet>
                <title>Altrid, 당신만의 학습 관리 시스템 | 모든 것을 관찰하고 기록합니다.</title>
            </Helmet>
            <SectionFrame id="main_section_1">
                <Section1 />
            </SectionFrame>
            <SectionFrame id="main_section_2">
                <Section2 />
            </SectionFrame>
            <SectionFrame id="main_section_3">
                <Section3 />
            </SectionFrame>
            <SectionFrame id="main_section_4">
                <Section4 />
            </SectionFrame>
            <SectionFrame id="main_section_5">
                <Section5 />
            </SectionFrame>
            <SectionFrame id="main_section_6">
                <Section6 />
            </SectionFrame>
            {/* <SectionFrame id="main_section_banner_matrios">
                <BannerMatrios />
            </SectionFrame> */}
            <SectionFrame id="main_section_banner_free_trial">
                <BannerFreeTrial />
            </SectionFrame>
        </>
    );
}

export default Main;
