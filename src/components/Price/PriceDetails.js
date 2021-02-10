import React, { useState } from 'react';
import '../../styles/price_details_page.scss';
import Radio from '@material-ui/core/Radio';
import { Helmet } from 'react-helmet';
import PriceData from '../../datas/PriceData.json';

function PriceDetails() {
    const [priceState, setPriceState] = useState('personal');

    const handleChange = (event) => {
        setPriceState(event.target.value);
    };

    return (
        <>
            <Helmet>
                <title>Altrid, 가격정책 | 당신만의 학습 관리 시스템</title>
            </Helmet>

            <div className="price-detail-root">
                <div className="price-nav">
                    <div className="nav-left" id="color-Free">
                        Free
                    </div>
                    <div className="nav-right">
                        <button id="backcolor-Free">
                            결제하기
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.526855 12.6637L7.20602 7.5L0.526855 2.33625L2.5831 0.75L11.3331 7.5L2.5831 14.25L0.526855 12.6637Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="price-wrapper">
                    <div className="price-header">
                        <div className="header-top">
                            <div className="top-left">
                                99,999<span id="small">원</span>
                            </div>
                            <div className="top-right">
                                <div>
                                    <Radio
                                        checked={priceState === 'personal'}
                                        onChange={handleChange}
                                        value="personal"
                                        color="default"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'personal' }}
                                        size="small"
                                    />
                                    개인
                                </div>

                                <div>
                                    <Radio
                                        checked={priceState === 'group'}
                                        onChange={handleChange}
                                        value="group"
                                        color="default"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'group' }}
                                        size="small"
                                    />
                                    학원
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom">
                            99,999<span id="small">원</span>
                            <span className="price-info" id="small">
                                (학생당/월)
                            </span>
                        </div>
                    </div>
                    <div className="price-table">
                        <div className="price-box">
                            <div className="box-header">asdfasdf</div>
                            <div className="box-row">
                                <div className="row-title">asdf</div>
                                <div className="row-content">a</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceDetails;
