import React from 'react';
import { Fade } from 'react-reveal';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '../../AltridUI/Typography/Typography';
import Button from '../../AltridUI/Button/Button';
import WorkaroundVidBtnIcon from '../../images/WorkaroundVidBtnIcon';
import ImgDeviceLaptop from '../../images/main_sections/section1/device-laptop.png';
import ImgDevicePhone from '../../images/main_sections/section1/device-phone.png';

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 56px 0;
    max-width: 1024px;
    width: 100%;
    @media (max-width: 600px) {
        margin: 16px 0;
    }
`;
const TopContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;
const SubTexts = styled.div``;
const MainTexts = styled.div`
    margin-top: 16px;
    max-width: 32rem;
`;
const BottomContainer = styled.div`
    display: inherit;
    flex-direction: column;
    width: 100%;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`;
const Actions = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;
const ActionButton = styled.div`
    & + & {
        margin-left: 8px;
    }
`;
const Illustration = styled.div`
    margin-top: 32px;
    position: relative;
    @media (max-width: 600px) {
        margin-top: 16px;
    }
`;
const IlsDeviceLaptop = styled.div`
    background: url(${ImgDeviceLaptop});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    height: 60vw;
    max-height: 500px;
    @media (max-width: 600px) {
        display: none;
    }
`;
const IlsDevicePhone = styled.div`
    background: url(${ImgDevicePhone});
    background-repeat: no-repeat;
    background-position: top;
    background-size: contain;
    display: none;
    height: 374px;
    @media (max-width: 600px) {
        display: block;
    }
`;

function Section1({ history }) {
    return (
        <Container>
            <TopContainer>
                <Fade bottom distance={'2rem'} delay={222} duration={666}>
                    <SubTexts>
                        <Typography type="label" size="xxl">
                            차별화 된 영어학습 관리 시스템
                        </Typography>
                    </SubTexts>
                </Fade>
                <Fade bottom distance={'2rem'} delay={444} duration={666}>
                    <MainTexts>
                        <Typography type="heading" size="m" bold>
                            학습에 불필요한 시간과 비용을 없앱니다.
                        </Typography>
                    </MainTexts>
                </Fade>
            </TopContainer>
            <BottomContainer>
                <Fade bottom distance={'2rem'} delay={567} duration={666}>
                    <Actions>
                        <ActionButton>
                            <NavLink to={{ pathname: 'https://lms.altridedge.com' }} target="_blank">
                                <Button sizes="large" colors="purple" variant="filled">
                                    무료체험하기
                                </Button>
                            </NavLink>
                        </ActionButton>
                        <ActionButton>
                            <NavLink to={{ pathname: 'https://youtu.be/tOAQxKnMiFg' }} target="_blank">
                                <Button sizes="large" colors="purple" variant="light" leftIcon={<WorkaroundVidBtnIcon />}>
                                    영상 둘러보기
                                </Button>
                            </NavLink>
                        </ActionButton>
                    </Actions>
                </Fade>
                <Fade bottom distance={'1.2rem'} delay={777} duration={500}>
                    <Illustration>
                        <IlsDeviceLaptop />
                        <IlsDevicePhone />
                    </Illustration>
                </Fade>
            </BottomContainer>
        </Container>
    );
}

export default React.memo(withRouter(Section1));
