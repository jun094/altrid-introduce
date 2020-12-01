import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import ImgStep1 from '../../images/main_sections/main_5-0.svg';
import ImgStep2 from '../../images/main_sections/main_5-1.svg';
import ImgStep3 from '../../images/main_sections/main_5-2.svg';
import ImgStep4 from '../../images/main_sections/main_5-3.svg';
import '../../styles/main_section_5.scss';
import SectionTitle from '../SectionTitle';

function StepCard({ icon, title, text, step, delay }) {
    return (
        <div className={`step-card root ${step}`}>
            <div className="icon-container">
                <img className="icon" src={icon} alt="icon..." />
            </div>
            <div className="contents">
                <div className="title-container">
                    <h4 className="title-text">{title}</h4>
                </div>
                <div className="text-container">
                    <p className="text">{text}</p>
                </div>
            </div>
        </div>
    );
}

StepCard.defaultProps = {
    icon: null,
    title: 'title',
    text: 'text',
    colorStep: 'step1',
    delay: 100,
};

function Section5() {
    const [viewMobile, setViewMobile] = useState(true);

    window.onresize = () => {
        if (window.innerWidth <= 768) {
            setViewMobile(true);
        } else {
            setViewMobile(false);
        }
    };

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setViewMobile(true);
        } else {
            setViewMobile(false);
        }
    }, []);

    return (
        <>
            <SectionTitle
                tag="How"
                title="맞춤형 학습 관리 시스템을 통해 객관적으로 측정합니다."
                subText="데이터와 기술을 통해 교육의 시간과 비용을 삭제할 수 있습니다."
            />
            <div className="subs-root">
                <Fade
                    left={viewMobile ? false : true}
                    top={viewMobile ? true : false}
                    distance={'4rem'}
                    duration={666}
                    fraction={viewMobile ? 0.5 : 0.7}
                >
                    <div className="step-card container">
                        <StepCard
                            step="step1"
                            icon={ImgStep1}
                            title="웹뷰를 통한 문제풀이 진행"
                            text="더이상 과제를 일일히 프린트할 필요가 없습니다."
                        />
                        <StepCard
                            step="step2"
                            icon={ImgStep2}
                            title="한눈에 볼 수 있는 리포트"
                            text="이제는 채점을 위해, 시간과 비용을 들일 필요가 없습니다."
                        />
                        <StepCard
                            step="step3"
                            icon={ImgStep3}
                            title="취약 영역 분석"
                            text="영어 유형별 분석이 가능하여, 취약 영역이 선정됩니다."
                        />
                        <StepCard
                            step="step4"
                            icon={ImgStep4}
                            title="AI 시선흐름 분석"
                            text="AI 시선 흐름 분석을 통한 문제 풀이 패턴 분석이 가능합니다."
                        />
                    </div>
                </Fade>
            </div>
        </>
    );
}

export default React.memo(Section5);
