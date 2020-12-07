import React from 'react';
import '../../styles/service_section_1.scss';
import { Fade } from 'react-reveal';
import { withRouter } from 'react-router-dom';
import Service1_0 from '../../images/service_sections/service_1-0.png';

/**
 * h1: 36px / 44px
 * h2: 32px / 42px
 * h3: 24px / 32px
 * h4: 18px / 24px
 * p: 16px
 */
function Section1({ history }) {
    return (
        <>
            <div className="left-and-top">
                <div className="contents">
                    <Fade right distance={'3rem'} delay={333} duration={666}>
                        <h1>
                            혁신적인 기술을 접목한 <br /> 맞춤형 학습 솔루션
                        </h1>
                    </Fade>
                    <Fade right distance={'3rem'} delay={333} duration={666}>
                        <h4>
                            알트리드만의 기술로 스마트하게 과제를 생성하고
                            <br />
                            교육의 시간을 줄여보세요.
                        </h4>
                    </Fade>

                    <Fade bottom delay={666} duration={1000}>
                        <div>
                            <button
                                type="button"
                                className="normal in-section no-op"
                                onClick={() => {
                                    history.push('/pricing');
                                }}
                            >
                                무료체험하기
                            </button>
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="right-and-bottom">
                <Fade left distance={'4rem'} delay={333} duration={666}>
                    <img src={Service1_0} alt="service in devices..." />
                </Fade>
            </div>
            <div className="right-and-bottom-mobile">
                <Fade bottom distance={'4rem'} delay={999} duration={666}>
                    <img src={Service1_0} alt="service in devices..." />
                </Fade>
            </div>
        </>
    );
}

export default React.memo(withRouter(Section1));
