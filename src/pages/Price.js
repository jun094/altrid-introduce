import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionFrame from '../components/SectionFrame';
import '../styles/price_page.scss';
import styled, { css } from 'styled-components';
import PriceData from '../datas/PriceData.json';
import ChannelService from '../components/ChannelIO/ChannelService';

const PriceButton = styled.button`
    padding: 0.7rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    background-color: ${(props) => (props.click ? '#3b168a' : 'white')};
    color: ${(props) => (props.click ? '#13E2A1' : '#C4C4C4')};

    @media (min-width: 0px) and (max-width: 768px) {
        width: 100%;
    }
`;

const BadgeButton = styled.a`
    background-color: ${(props) => (props.type === 'group' ? '#3b168a' : 'white')};
    color: ${(props) => (props.type === 'group' ? 'white' : '#1d3853')};
`;

const MoneyNum = styled.p`
    margin: 0;
    font-size: 1.25rem;
    ${(props) =>
        props.type === 'group' &&
        css`
            height: 14px;
            border-bottom: 2.5px solid black;

            @media (min-width: 0px) and (max-width: 768px) {
                margin: 0;
                height: auto;
                border-bottom: 0;
                text-decoration: line-through;

                & + & {
                    margin-left: 0.25rem;
                }
            }
        `}
`;

const PriceItems = ({ type }) => {
    return (
        <div className="table-cell">
            {type === 1 ? (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.3067 0.335887L4.83764 9.27416L2.2896 6.47784C1.16611 5.58246 -0.599826 6.62526 0.202448 7.96756L3.23154 12.8495C3.71259 13.4453 4.83764 14.0412 5.95958 12.8495C6.44064 12.2536 15.59 1.67663 15.59 1.67663C16.715 0.484858 15.2703 -0.55794 14.3067 0.335887V0.335887Z"
                        fill="#3B168A"
                    />
                </svg>
            ) : type === 0 ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.34107 7.10315C8.31364 7.07579 8.29823 7.03864 8.29823 6.9999C8.29823 6.96116 8.31364 6.92402 8.34107 6.89666L13.744 1.49405C14.0857 1.15192 14.0853 0.597619 13.7432 0.255976C13.401 -0.0856668 12.8468 -0.0852751 12.5051 0.256851L7.10275 5.65713C7.0754 5.68455 7.03825 5.69997 6.99951 5.69997C6.96077 5.69997 6.92363 5.68455 6.89627 5.65713L1.49389 0.256851C1.15226 -0.0849529 0.598238 -0.0850835 0.256448 0.256559C-0.0853421 0.598202 -0.0854727 1.15225 0.256156 1.49405L5.65796 6.89666C5.68538 6.92402 5.7008 6.96116 5.7008 6.9999C5.7008 7.03864 5.68538 7.07579 5.65796 7.10315L0.256156 12.5063C0.035161 12.7275 -0.0510918 13.0497 0.0298883 13.3516C0.110868 13.6536 0.346778 13.8894 0.648753 13.9702C0.950728 14.0511 1.27289 13.9647 1.49389 13.7435L6.89627 8.34035C6.92363 8.31292 6.96077 8.29751 6.99951 8.29751C7.03825 8.29751 7.0754 8.31292 7.10275 8.34035L12.5051 13.7435C12.8468 14.0853 13.4008 14.0855 13.7426 13.7438C14.0844 13.4022 14.0845 12.8481 13.7429 12.5063L8.34107 7.10315Z"
                        fill="#13E2A1"
                    />
                </svg>
            ) : (
                type
            )}
        </div>
    );
};

function Price() {
    const [priceState, setPriceState] = useState('personal');

    const handlePriceType = (e) => {
        const { name } = e.target;

        if (name === 'personal') {
            setPriceState('personal');
        } else if (name === 'group') {
            setPriceState('group');
        }
    };
    return (
        <>
            <Helmet>
                <title>알트리드, 불필요한 시간과 비용을 없애자! | Eduity for infinite pioneer</title>
            </Helmet>
            <SectionFrame id="price_section_1">
                <BadgeButton
                    type={priceState}
                    href="https://www.notion.so/optmier/71ef2aa559d84fb7a62ed8d9c79c6ec6"
                    target="_blank"
                    alt="badge"
                    className="price-badge"
                >
                    <div className="badge-left">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
                                fill="#E6F6F6"
                            />
                            <path
                                d="M16.9176 8.02507L10.285 14.2859L8.50025 12.3272C7.71329 11.7001 6.47633 12.4305 7.03829 13.3707L9.16003 16.7903C9.49699 17.2077 10.285 17.6251 11.0709 16.7903C11.4079 16.3729 17.8166 8.9642 17.8166 8.9642C18.6046 8.12942 17.5926 7.39898 16.9176 8.02507V8.02507Z"
                                fill="#13E2A1"
                            />
                        </svg>
                        <p>학원 소비자의 경우, 할인된 가격으로 만나보세요!</p>
                    </div>
                    <div className="badge-right">
                        <p>조건 확인하기 </p>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.589844 10.59L5.16984 6L0.589844 1.41L1.99984 0L7.99984 6L1.99984 12L0.589844 10.59Z"
                                fill="#13E2A1"
                            />
                        </svg>
                    </div>
                </BadgeButton>

                <div className="price-title">
                    <div className="title-left">
                        <h2>
                            무료버전으로 시작하고, <span> 학원 성장을 경험해보세요.</span>
                        </h2>
                        <p>베타 기간 한정, 모든 기능에 대하여 할인된 가격으로 제공해드립니다.</p>
                    </div>
                    <div className="title-right">
                        <PriceButton
                            className="btn-left"
                            click={priceState === 'personal' ? true : false}
                            name="personal"
                            onClick={handlePriceType}
                        >
                            개인
                        </PriceButton>
                        <PriceButton
                            className="btn-right"
                            click={priceState === 'group' ? true : false}
                            name="group"
                            onClick={handlePriceType}
                        >
                            학원
                        </PriceButton>
                    </div>
                </div>

                <div className="price-table">
                    <div className="col web">
                        <div className="child table-header"></div>
                        <div className="name table-line">무제한 클래스 생성</div>
                        <div className="name table-line">에디터 통한 무제한 과제 생성</div>
                        <div className="name table-line">파일 업로드 통한 과제 생성</div>
                        <div className="name table-line">과제별 반/학생 리포트</div>
                        <div className="name table-line">AI 취약 영역 분석</div>
                        <div className="name table-line">과제 중 시선흐름 추적</div>
                        <div className="name table-line">문제 풀이 패턴 분석</div>
                        <div className="name table-line">온라인 화상 수업</div>
                    </div>

                    {Object.keys(PriceData).map((i) => (
                        <div className="col" key={i}>
                            <div className="child table-header">
                                <h2>{i}</h2>
                                <div className="table-subTitle">
                                    <div>
                                        <MoneyNum type={priceState}>{PriceData[i]['price']}원</MoneyNum>
                                    </div>
                                    <div>
                                        {priceState === 'group' ? (
                                            <div style={{ marginTop: '12px' }}>
                                                <MoneyNum>{PriceData[i]['price2']}원</MoneyNum>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </div>

                                    <span>(학생당/월)</span>
                                </div>
                                <div className="table-subTitle-mobile">
                                    <MoneyNum type={priceState}>{PriceData[i]['price']}원</MoneyNum>
                                    {priceState === 'group' ? <MoneyNum>{PriceData[i]['price2']}원</MoneyNum> : ''}
                                    <span>(학생당/월)</span>
                                </div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['draft_class']}></PriceItems>
                                <div className="table-desc-mobile">무제한 클래스 생성</div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['draft_assignment']}></PriceItems>
                                <div className="table-desc-mobile">에디터 통한 무제한 과제 생성</div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['draft_file_assignment']}></PriceItems>
                                <div className="table-desc-mobile">파일 업로드 통한 과제 생성</div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['class_report']}></PriceItems>
                                <div className="table-desc-mobile">과제별 반/학생 리포트</div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['AI_report']}></PriceItems>
                                <div className="table-desc-mobile">AI 취약 영역 분석</div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['eyetrack']}></PriceItems>
                                <div className="table-desc-mobile">과제 중 시선흐름 추적</div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['pattern_analysis']}></PriceItems>
                                <div className="table-desc-mobile">문제 풀이 패턴 분석</div>
                            </div>
                            <div className="child table-line">
                                <PriceItems type={PriceData[i]['online_video']}></PriceItems>
                                <div className="table-desc-mobile">온라인 화상 수업</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="price-footer">
                    <button
                        className="price-button"
                        onClick={() => {
                            // alert('준비 중입니다!!\n문의는 jun094@optmier.com으로 해주세요.');
                            ChannelService.openChat(undefined, '서비스를 도입하고 싶습니다!');
                        }}
                    >
                        도입 문의하기
                    </button>
                </div>
            </SectionFrame>
        </>
    );
}

export default Price;
