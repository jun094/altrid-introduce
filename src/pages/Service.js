import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SectionFrame from '../components/SectionFrame';
import Section1 from '../components/ServiceSections/Section1';
import Section2 from '../components/ServiceSections/Section2';
import Section3 from '../components/ServiceSections/Section3';
import Section4 from '../components/ServiceSections/Section4';
import BannerFreeTrial from '../components/BannerFreeTrial';

function Service() {
    // useEffect(() => {
    //     window.analytics.logEvent('서비스 페이지 접속');
    // }, []);

    return (
        <>
            <Helmet>
                <title>Altrid, 이용 방법 | 당신만의 학습 관리 시스템</title>
            </Helmet>
            <SectionFrame id="service_section_1">
                <Section1 />
            </SectionFrame>
            <SectionFrame id="service_section_2">
                <Section2 />
            </SectionFrame>
            <SectionFrame id="service_section_3">
                <Section3 />
            </SectionFrame>
            <SectionFrame id="service_section_4">
                <Section4 />
            </SectionFrame>
            <SectionFrame id="main_section_banner_free_trial">
                <BannerFreeTrial />
            </SectionFrame>
        </>
    );
}

export default Service;
