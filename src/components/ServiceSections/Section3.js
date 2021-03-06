import React from 'react';
import '../../styles/service_section_3.scss';
import { Fade } from 'react-reveal';
import SectionTitle from '../SectionTitle';

/**
 * h1: 36px / 44px
 * h2: 32px / 42px
 * h3: 24px / 32px
 * h4: 18px / 24px
 * p: 16px
 */
function Section3() {
    return (
        <>
            <SectionTitle
                tag="Video"
                title="시선흐름 측정 방법을 직접 확인해보세요."
                subText="동영상을 통해 시선흐름 측정 방법을 확인할 수 있습니다."
            />
            <Fade bottom distance={'3rem'} delay={666} duration={666}>
                {/* <video style={{ width: '100%' }} controls>
                    <source src="/videos/eyetracking_demo.mp4" type="video/mp4" />
                </video> */}
                <div
                    style={{
                        width: '100%',
                        height: '400px',
                        background: '#d6d5d5',
                        color: '#737171',
                        fontSize: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '11px',
                    }}
                >
                    추후, 준비 예정입니다 :(
                </div>
            </Fade>
        </>
    );
}

export default React.memo(Section3);
