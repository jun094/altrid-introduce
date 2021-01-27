import React, { useState, useRef, useEffect } from 'react';
import { Fade, Zoom } from 'react-reveal';
import ImgItem1 from '../../images/main_sections/main_2-0.png';
import ImgItem2 from '../../images/main_sections/main_2-1.png';
import ImgItem3 from '../../images/main_sections/main_2-2.png';
import ImgItem4 from '../../images/main_sections/main_2-3.png';
import ImgDescriptorSymbor from '../../images/descriptor_head_symbol.svg';
import '../../styles/main_section_2.scss';

function Section2() {
    const [viewMobile, setViewMobile] = useState(true);
    const itemsRef = [useRef(), useRef(), useRef(), useRef()];
    const [activeItemNum, setActiveItemNum] = useState(0);
    const [activeDescNum, setActiveDescNum] = useState(4);
    const itemDescriptors = [
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        별도의 장치 없이, 노트북 웹캠을 통한 <span>시선흐름 측정</span>
                    </h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>시선 응시점 개수, 평균 응시 속도 등 시선 데이터 기록</h4>
                </div>
            </Fade>
            <Fade delay={400} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        답 변경 횟수, 문제 풀이 패턴 등 여러가지 <span>관찰 데이터</span> 기록
                    </h4>
                </div>
            </Fade>
        </>,
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        알트리드 <span>자체 에디터</span>를 통해 즉시, 문제 제작 가능
                    </h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        <span>파일 업로드</span>를 통한, 문제 제작 가능
                    </h4>
                </div>
            </Fade>
            <Fade delay={400} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        기한 설정 및 <span>실시간 진행 상황</span>을 알 수 있는 과제
                    </h4>
                </div>
            </Fade>
        </>,
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        한눈에 볼 수 있는 <span>클래스별 성적표</span>
                    </h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>우리 반의 영역별 평균 점수, 가장 취학한 영역 등 다수 리포트 제공</h4>
                </div>
            </Fade>
            <Fade delay={400} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        <span>시선흐름</span>과 <span>문제 풀이 패턴</span>에 대한 리포트 제공
                    </h4>
                </div>
            </Fade>
        </>,
        <>
            <Fade delay={0} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        학습 리포트를 참고하여 <span>언제, 어디서나 </span>가능한 실시간 화상 수업
                    </h4>
                </div>
            </Fade>
            <Fade delay={200} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        수업 목적에 특화된 화상 수업기능 활용으로 <span>실시간 피드백</span>이 가능한 효율적 수업진행
                    </h4>
                </div>
            </Fade>
            <Fade delay={400} duration={666}>
                <div className="descriptor">
                    <div className="head-symbol">
                        <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                    </div>
                    <h4>
                        AI시선 추적 기술 활용, 화상 수업 중 <span>실시간 집중도</span>확인을 통해 개인화 수업 가능.
                    </h4>
                </div>
            </Fade>
        </>,

        <></>,
    ];
    const itemDescriptorsNoAnim = [
        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    별도의 장치 없이, 노트북 웹캠을 통한 <span>시선흐름 측정</span>
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    답 변경 횟수, 문제 풀이 패턴, 소요시간 등 여러가지 <span>관찰 데이터</span> 기록
                </h4>
            </div>
        </>,

        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    알트리드 <span>자체 에디터</span>를 통해 즉시, 문제 제작 가능
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    <span>파일 업로드</span>를 통한, 문제 제작 가능
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    기한 설정 및 <span>실시간 진행 상황</span>을 알 수 있는 과제
                </h4>
            </div>
        </>,
        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    한눈에 볼 수 있는 <span>클래스별 성적표</span>
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>우리 반의 영역별 평균 점수, 가장 취학한 영역 등 다수 리포트 제공</h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    <span>시선흐름</span>과 <span>문제 풀이 패턴</span>에 대한 리포트 제공
                </h4>
            </div>
        </>,
        <>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    학습 리포트를 참고하여 <span>언제, 어디서나</span> 가능한 실시간 화상 수업
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    수업 목적에 특화된 화상 수업기능 활용으로 <span>실시간 피드백</span>이 가능한 효율적 수업진행
                </h4>
            </div>
            <div className="descriptor">
                <div className="head-symbol">
                    <img src={ImgDescriptorSymbor} alt="symbol..."></img>
                </div>
                <h4>
                    AI시선 추적 기술 활용, 화상 수업 중 실시간 집중도 확인을 통해 <span>개인화 수업</span> 가능
                </h4>
            </div>
        </>,
        <></>,
    ];
    const [items, setItems] = useState([
        {
            id: 0,
            ref: itemsRef[0],
            active: true,
            text: '관찰기록 리포트',
            itemImg: ImgItem1,
        },
        {
            id: 1,
            ref: itemsRef[1],
            active: false,
            text: '웹 과제 생성',
            itemImg: ImgItem2,
        },
        {
            id: 2,
            ref: itemsRef[2],
            active: false,
            text: '맞춤형 학습 리포트',
            itemImg: ImgItem3,
        },
        {
            id: 3,
            ref: itemsRef[3],
            active: false,
            text: '온라인 화상 수업',
            itemImg: ImgItem4,
        },
    ]);

    const [selectorState, setSelectorState] = useState({
        translateX: 0,
        width: 1,
    });

    const handleOnItemClick = ({ target }) => {
        const { clientWidth, dataset } = target;
        const selectedId = dataset.id;
        const selectedElement = itemsRef[selectedId].current;

        setSelectorState({
            width: clientWidth,
            translateX: selectedElement.offsetLeft - items[0].ref.current.offsetLeft,
        });
        setItems(items.map((d, i) => ({ ...d, active: i == dataset.id })));
        setActiveItemNum(parseInt(selectedId));
        setActiveDescNum(4);
        setTimeout(() => {
            setActiveDescNum(parseInt(selectedId));
        }, 10);
        // setActiveDescNum(parseInt(selectedId));
    };

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
        setActiveDescNum(0);
        setSelectorState({
            ...selectorState,
            width: items[0].ref.current.clientWidth,
        });
    }, []);

    useEffect(() => {
        // setActiveDescNum(0);
        if (itemsRef[activeDescNum]) {
            setSelectorState({
                translateX: itemsRef[activeDescNum].current.offsetLeft - items[0].ref.current.offsetLeft,
                width: items[0].ref.current.clientWidth,
            });
        }
    }, [viewMobile]);

    return (
        <>
            <div className="title-root">
                <p className="title-tags lighter">Feature</p>
                <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.5}>
                    <h1 className="title">알트리드만의 차별화된 대표기능 4가지로 새로운 영어교육을 만날 수 있습니다.</h1>
                </Fade>
                <Fade bottom distance={'3rem'} delay={333} duration={666} fraction={0.5}>
                    <h1 className="title mobile">차별화된 알트리드만의 대표기능 4가지</h1>
                </Fade>
            </div>
            <Fade delay={333} duration={666} fraction={1}>
                <div className="middle-buttons-root">
                    <div className="items">
                        <div
                            className="selector"
                            style={{ width: selectorState.width, transform: `translateX(${selectorState.translateX}px)` }}
                        ></div>
                        {items.map((d, i) => (
                            <div
                                key={i}
                                className={`item ${items[d.id].active ? 'active' : false}`}
                                data-id={d.id}
                                ref={d.ref}
                                onClick={handleOnItemClick}
                            >
                                {i <= 2 ? (
                                    <h4>{d.text}</h4>
                                ) : (
                                    <h4>
                                        {d.text} <span className="prepare">준비중</span>
                                    </h4>
                                )}
                                <h4 className="mobile">{`0${d.id + 1}`}</h4>
                            </div>
                        ))}
                    </div>
                    {activeItemNum <= 2 ? (
                        <h3 className="mobile-item-title">{items[activeItemNum].text}</h3>
                    ) : (
                        <h3 className="mobile-item-title">
                            {items[activeItemNum].text}
                            <span className="prepare">준비중</span>
                        </h3>
                    )}
                </div>
            </Fade>
            <div className="subs-root">
                <div className="left-and-top">
                    <div className="item-descriptors">
                        {viewMobile ? itemDescriptorsNoAnim[activeItemNum] : itemDescriptors[activeDescNum]}
                    </div>
                </div>
                <div className="right-and-bottom">
                    {viewMobile ? (
                        <img src={items[activeItemNum].itemImg} />
                    ) : (
                        <Zoom delay={333} duration={666} fraction={0.333}>
                            <img src={items[activeItemNum].itemImg} />
                        </Zoom>
                    )}
                </div>
            </div>
        </>
    );
}

export default React.memo(Section2);
