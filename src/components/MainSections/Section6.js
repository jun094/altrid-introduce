import React from 'react';
import ImgSolu1 from '../../images/main_sections/main_6-0.svg';
import ImgSolu2 from '../../images/main_sections/main_6-1.svg';
import ImgSolu3 from '../../images/main_sections/main_6-2.svg';
import SectionTitle from '../SectionTitle';
import '../../styles/main_section_6.scss';
import { Fade } from 'react-reveal';

function SolutionCard({ icon, title, text }) {
    return (
        <div className="solution-card">
            <div className="icon-container">
                <img src={icon} alt="solution icon..." />
            </div>
            <div className="text-container">
                <h4 className="title">{title}</h4>
                <p className="text">{text}</p>
            </div>
        </div>
    );
}

SolutionCard.defaultProps = {
    icon: null,
    title: 'Title',
    text: 'Text',
};

function Section6() {
    return (
        <>
            <SectionTitle
                tag="What"
                title="알트리드 솔루션을 통해 3가지가 가능해집니다."
                subText="알트리드만의 솔루션을 통해 차별화된 학생 관리를 경험해보세요"
            />
            <div className="subs-root">
                <div className="solution-cards-root">
                    <Fade duration={666} delay={100} fraction={0.8}>
                        <SolutionCard
                            icon={ImgSolu1}
                            title="시선흐름 분석을 통한 학생 평가"
                            text="시선흐름 분석 영상을 통해 학생의 시선을 확인할 수 있습니다."
                        />
                    </Fade>
                    <Fade duration={666} delay={300} fraction={0.8}>
                        <SolutionCard
                            icon={ImgSolu2}
                            title="데이터와 연결된 맞춤형 학습 진단"
                            text="클래스의 부족한 영역에 대하여 한 눈에 확인할 수 있습니다."
                        />
                    </Fade>
                    <Fade duration={666} delay={500} fraction={0.8}>
                        <SolutionCard
                            icon={ImgSolu3}
                            title="실시간 교육이 가능한 1대1 화상교육"
                            text="시선흐름 패턴과 영어 학습에 관련해서 실시간 피드백이 가능합니다."
                        />
                    </Fade>
                </div>
            </div>
        </>
    );
}

export default Section6;
