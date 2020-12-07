import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { IoIosArrowDown } from 'react-icons/io';
import { Fade } from 'react-reveal';

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        padding: '1rem',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
            backgroundColor: '#F7F9FC',
        },

        '@media all and (max-width: 768px)': {
            padding: '1rem 0rem',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        fontWeight: '600',
        backgroundColor: 'white',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
            backgroundColor: '#F7F9FC',
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
            '& svg': {
                transition: 'all 0.5s',
                transform: 'rotate(180deg)',
            },
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);
export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Fade bottom distance={'3rem'} delay={0} duration={666} fraction={0.9}>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <span className="faq-title">
                            01. 시선흐름 서비스를 이용하기 위한 최소사양은 어떻게 되나요?
                            <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                        </span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            노트북은 최소 13인치, 최소 해상도는 1440*900(100%)이며, 웹캠은 720p 이상을 권장 드립니다. <br />웹 브라우저는
                            크롬 웹브라우저에 최적화 되어있습니다. 이외의 웹브라우저 사용 시, 다수의 버그가 발생할 수 있습니다.
                        </span>
                    </AccordionDetails>
                </Accordion>
            </Fade>
            <Fade bottom distance={'3rem'} delay={0} duration={666} fraction={0.9}>
                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <span className="faq-title">
                            02. 한 학원에서 여러 선생님이 이용 가능한가요?
                            <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                        </span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            유료 서비스 구매시,학원 코드가 부여됩니다. 회원가입시 학원코드를 입력하면 한 학원에서 여러 선생님이 이용
                            가능합니다.
                        </span>
                    </AccordionDetails>
                </Accordion>
            </Fade>
            <Fade bottom distance={'3rem'} delay={0} duration={666} fraction={0.9}>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <span className="faq-title">
                            03. 과제 생성 시, '직접 생성'과 '파일 업로드 생성'은 무엇이 다른가요?
                            <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                        </span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            과제 생성 방법에는 2가지 방법이 존재합니다. <br />
                            <br /> '직접 생성'의 경우, 알트리드에서 제작한 에디터를 통해 과제 제작이 가능하며, 과제 생성 즉시 학생들에게
                            과제를 게시할 수 있습니다. <br />
                            <br />
                            '파일 업로드 생성'의 경우, 선생님들께서 기존이 만들어놓은 파일(hwp, pdf, word)이 있으시다면, 파일 업로드를 통해
                            과제 제작이 가능합니다. &nbsp; 그러나, 파일 업로드의 경우 과제를 웹 view로 변환하는데 다소 시간이 소요됩니다.
                        </span>
                    </AccordionDetails>
                </Accordion>
            </Fade>

            <Fade bottom distance={'3rem'} delay={0} duration={666} fraction={0.9}>
                <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <span className="faq-title">
                            04. 서비스를 모바일에서 이용할 수 있나요?
                            <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                        </span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            현재 알트리트 학습 관리 서비스(LMS)는 웹 버전만 출시된 상태입니다. <br /> 반드시 웹 브라우저와 함께 이용해주시면
                            감사하겠습니다.
                        </span>
                    </AccordionDetails>
                </Accordion>
            </Fade>

            <Fade bottom distance={'3rem'} delay={0} duration={666} fraction={0.9}>
                <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                        <span className="faq-title">
                            05. 유형별 분석의 진행률은 무엇인가요? <IoIosArrowDown style={{ marginLeft: '1rem', width: '30px' }} />
                        </span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <span>
                            유형별 분석의 경우, 과제의 최소 조건이 만족되어야 'AI 유형별 분석'이 가능합니다.
                            <br />
                            <br />
                            최소 조건은 토플 유형 10가지 중 최소 3가지 유형 이상, 한 유형 당 최소 3문제 이상이 포함되어야 합니다.
                        </span>
                    </AccordionDetails>
                </Accordion>
            </Fade>
        </div>
    );
}
