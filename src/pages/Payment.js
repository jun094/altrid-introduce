import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/payment_page.scss';
import { apiUrl } from '../configs/configs.js';

function Payment({ history }) {
    useEffect(() => {
        alert('현재는 베타 서비스 기간입니다!\n무료 베타 버전 이용을 원하시는 고객님께서는\n우하단 상담 버튼을 클릭해주세요 :)');
        history.goBack();
        /** 론칭시 아래 주석 오픈 !!! **/
        //window.location.href = `${apiUrl}/login?user=teachers&payment=true`;
    }, []);

    return (
        <div className="payment-root">
            <h4>결제 모듈 준비 중... </h4>
        </div>
    );
}

export default withRouter(Payment);
