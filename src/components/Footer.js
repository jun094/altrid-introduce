import React from 'react';
import styled from 'styled-components';

const FooterRoot = styled.footer`
    align-items: center;
    display: flex;
    font-family: inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    justify-content: center;
    padding: 36px 32px 36px 32px;
    @media (max-width: 560px) {
        box-shadow: inset 0px 1px 0px #e9edef;
        padding-left: 16px;
        padding-right: 16px;
    }
`;
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 560px) {
        justify-content: flex-start;
        width: 100%;
    }
`;
const TopLogoContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    @media (max-width: 560px) {
        justify-content: flex-start;
    }
`;
const TopLogo = styled.svg``;
const PrimaryMenusContainer = styled.div`
    color: #11171c;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.02em;
    padding-top: 16px;
    text-align: center;
    @media (max-width: 800px) {
        font-size: 18px;
        line-height: 22px;
    }
    @media (max-width: 560px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 32px;
        text-align: initial;
    }
`;
const PrimaryMenuItem = styled.span`
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.5;
    }
    & + &::before {
        border-left: 1px solid #bfc6cd;
        content: '';
        display: inline-block;
        margin: 0 20px;
        margin-bottom: 2px;
        height: 12px;
    }
    @media (max-width: 800px) {
        & + &::before {
            margin: 0 18px;
            margin-bottom: 1px;
        }
    }
    @media (max-width: 560px) {
        & + & {
            margin-top: 8px;
        }
        & + &::before {
            display: none;
        }
    }
`;
const PrimaryMenuItemLink = styled.a``;
const SecondaryMenusContainer = styled.div`
    color: #4d5c6a;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.02em;
    padding-top: 8px;
    text-align: center;
    @media (max-width: 560px) {
        color: #9aa5af;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 24px;
        text-align: initial;
    }
`;
const SecondaryMenuItem = styled.span`
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.66;
    }
    & + &::before {
        border-left: 1px solid #bfc6cd;
        content: '';
        display: inline-block;
        margin: 0 18px;
        margin-bottom: 0px;
        height: 12px;
    }
    @media (max-width: 560px) {
        & + & {
            margin-top: 4px;
        }
        & + &::before {
            display: none;
        }
    }
`;
const SecondaryMenuItemLink = styled.a``;
const Address = styled.div`
    color: #4d5c6a;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.02em;
    padding-top: 14px;
    text-align: center;
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.66;
    }
    @media (max-width: 560px) {
        color: #9aa5af;
        padding-top: 24px;
        text-align: initial;
    }
`;
function Footer() {
    return (
        <FooterRoot>
            <FooterContainer>
                <TopLogoContainer>
                    <TopLogo width="58" height="66" viewBox="0 0 58 66">
                        <path
                            d="M54.0401 59.5498L28.9611 18.2554L3.86598 59.6454C3.24026 59.7015 2.64482 59.9372 2.15291 60.3235C1.66101 60.7098 1.29412 61.2298 1.09745 61.8196C0.900777 62.4093 0.88288 63.043 1.04598 63.6427C1.20908 64.2424 1.54607 64.7818 2.01542 65.1946C2.48478 65.6074 3.06601 65.8756 3.68759 65.9661C4.30918 66.0565 4.94397 65.9654 5.51381 65.7039C6.08366 65.4423 6.56368 65.0218 6.89478 64.4941C7.22589 63.9663 7.39367 63.3544 7.37739 62.7337C7.3755 62.214 7.23672 61.7038 6.97471 61.2532L12.2096 52.6728C17.1146 56.0817 22.9647 57.9111 28.9611 57.9111C34.9574 57.9111 40.8076 56.0817 45.7126 52.6728L50.9796 61.3487C50.6616 61.9585 50.5514 62.6536 50.6654 63.3303C50.7795 64.007 51.1116 64.6293 51.6124 65.1043C52.1132 65.5794 52.7559 65.8819 53.4447 65.9667C54.1335 66.0516 54.8316 65.9143 55.4351 65.5753C56.0386 65.2363 56.5151 64.7136 56.7937 64.0853C57.0723 63.4569 57.1381 62.7565 56.9813 62.0881C56.8245 61.4198 56.4535 60.8194 55.9235 60.3764C55.3935 59.9334 54.7329 59.6714 54.0401 59.6294V59.5498ZM4.23646 63.466C4.01859 63.466 3.80965 63.3804 3.65559 63.2282C3.50154 63.0759 3.41498 62.8694 3.41498 62.6541C3.39101 62.5363 3.39382 62.4147 3.42319 62.298C3.45256 62.1814 3.50776 62.0727 3.58481 61.9797C3.66186 61.8867 3.75888 61.8118 3.86878 61.7604C3.97868 61.7089 4.09873 61.6822 4.22034 61.6822C4.34194 61.6822 4.46204 61.7089 4.57195 61.7604C4.68185 61.8118 4.77882 61.8867 4.85587 61.9797C4.93292 62.0727 4.98812 62.1814 5.01749 62.298C5.04686 62.4147 5.04966 62.5363 5.0257 62.6541C5.02586 62.864 4.94379 63.0658 4.79664 63.2172C4.64948 63.3686 4.4487 63.4578 4.23646 63.466ZM28.9933 54.3602C23.6336 54.3486 18.4122 52.6785 14.0619 49.5844L28.9933 25.0051L43.9247 49.5685C39.5704 52.6804 34.3346 54.3571 28.9611 54.3602H28.9933ZM53.8307 63.466C53.6128 63.466 53.4038 63.3804 53.2498 63.2282C53.0957 63.0759 53.0092 62.8694 53.0092 62.6541C52.9852 62.5363 52.988 62.4147 53.0174 62.298C53.0467 62.1814 53.1019 62.0727 53.179 61.9797C53.256 61.8867 53.353 61.8118 53.4629 61.7604C53.5728 61.7089 53.6929 61.6822 53.8145 61.6822C53.9361 61.6822 54.0562 61.7089 54.1661 61.7604C54.276 61.8118 54.373 61.8867 54.4501 61.9797C54.5271 62.0727 54.5823 62.1814 54.6117 62.298C54.641 62.4147 54.6439 62.5363 54.6199 62.6541C54.6199 62.8694 54.5333 63.0759 54.3793 63.2282C54.2252 63.3804 54.0163 63.466 53.7984 63.466H53.8307Z"
                            fill="url(#paint0_linear_44:1431)"
                        />
                        <path
                            d="M3.62101 44.8878C3.54032 45.3494 3.56141 45.823 3.68282 46.2755C3.80422 46.7281 4.02301 47.1485 4.32379 47.5072C4.62457 47.866 5.00007 48.1545 5.42394 48.3524C5.8478 48.5503 6.30974 48.6529 6.77736 48.6529C7.24499 48.6529 7.70693 48.5503 8.13079 48.3524C8.55466 48.1545 8.93016 47.866 9.23094 47.5072C9.53172 47.1485 9.75051 46.7281 9.87191 46.2755C9.99332 45.823 10.0144 45.3494 9.93372 44.8878C9.92806 44.4252 9.81852 43.9697 9.61326 43.5553L29.016 11.6218L48.4028 43.5231C48.1919 43.9413 48.0821 44.4032 48.0823 44.8718C47.9945 45.3358 48.01 45.8136 48.1276 46.2711C48.2452 46.7285 48.4621 47.1542 48.7628 47.518C49.0635 47.8818 49.4405 48.1746 49.8671 48.3756C50.2937 48.5766 50.7593 48.6809 51.2307 48.6809C51.702 48.6809 52.1676 48.5766 52.5942 48.3756C53.0208 48.1746 53.3979 47.8818 53.6986 47.518C53.9992 47.1542 54.2161 46.7285 54.3337 46.2711C54.4513 45.8136 54.4668 45.3358 54.379 44.8718C54.38 44.4343 54.2871 44.0017 54.1066 43.6034C56.6551 39.186 57.9979 34.1741 58 29.0717C58.0021 23.9693 56.6635 18.9563 54.1188 14.5368C51.574 10.1173 47.9129 6.44708 43.5035 3.89527C39.0941 1.34345 34.0919 0 29 0C23.9081 0 18.9059 1.34345 14.4965 3.89527C10.0871 6.44708 6.42597 10.1173 3.88123 14.5368C1.3365 18.9563 -0.00213158 23.9693 2.54777e-06 29.0717C0.00213667 34.1741 1.34498 39.186 3.89341 43.6034C3.71827 44.0091 3.62565 44.4458 3.62101 44.8878ZM6.82543 45.7066C6.69556 45.7055 6.56792 45.6728 6.45348 45.6112C6.33904 45.5497 6.24124 45.4612 6.16852 45.3534C6.06573 45.2199 6.00943 45.0564 6.00829 44.8878C6.00829 44.6707 6.09439 44.4624 6.24763 44.3088C6.40087 44.1553 6.60871 44.069 6.82543 44.069C6.9553 44.0701 7.08294 44.1028 7.19738 44.1644C7.31181 44.2259 7.40962 44.3144 7.48234 44.4222C7.57247 44.5426 7.62702 44.6859 7.63978 44.8358C7.65254 44.9857 7.623 45.1363 7.55451 45.2702C7.48602 45.4041 7.38134 45.516 7.25243 45.5932C7.12352 45.6703 6.97556 45.7097 6.82543 45.7066ZM51.2867 45.7066C51.1017 45.6693 50.9352 45.569 50.8156 45.4227C50.696 45.2764 50.6306 45.093 50.6306 44.9039C50.6306 44.7147 50.696 44.5314 50.8156 44.3851C50.9352 44.2387 51.1017 44.1384 51.2867 44.1011C51.4053 44.0772 51.5277 44.08 51.6451 44.1093C51.7625 44.1386 51.8719 44.1936 51.9655 44.2704C52.0591 44.3472 52.1345 44.4439 52.1863 44.5534C52.238 44.6629 52.2649 44.7827 52.2649 44.9039C52.2649 45.0251 52.238 45.1448 52.1863 45.2543C52.1345 45.3639 52.0591 45.4605 51.9655 45.5373C51.8719 45.6141 51.7625 45.6692 51.6451 45.6984C51.5277 45.7277 51.4053 45.7305 51.2867 45.7066ZM3.50884 29.0736C3.49929 25.1646 4.38464 21.3054 6.09679 17.793C7.80894 14.2806 10.3023 11.2085 13.385 8.81296C16.4677 6.41747 20.0577 4.76243 23.8788 3.97516C27.6999 3.18788 31.6504 3.28934 35.4262 4.27173C39.202 5.25412 42.7027 7.09126 45.6589 9.64185C48.6151 12.1924 50.9482 15.3885 52.4785 18.9842C54.0089 22.5799 54.6957 26.4795 54.4864 30.3829C54.277 34.2863 53.1769 38.0896 51.2707 41.5002L29.016 4.84662L6.74534 41.5002C4.61997 37.7051 3.50535 33.4255 3.50884 29.0736Z"
                            fill="url(#paint1_linear_44:1431)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_44:1431"
                                x1="29.0094"
                                y1="0.919328"
                                x2="29.0094"
                                y2="54.2169"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#51BA97" />
                                <stop offset="1" stopColor="#47278B" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_44:1431"
                                x1="23858.3"
                                y1="5470.27"
                                x2="23858.3"
                                y2="7100.1"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#51BA97" />
                                <stop offset="1" stopColor="#47278B" />
                            </linearGradient>
                        </defs>
                    </TopLogo>
                </TopLogoContainer>
                <PrimaryMenusContainer>
                    <PrimaryMenuItem>
                        <PrimaryMenuItemLink href="https://altridedge.com/">ALTRID</PrimaryMenuItemLink>
                    </PrimaryMenuItem>
                    <PrimaryMenuItem>
                        <PrimaryMenuItemLink href="http://optmier.com/">OPTIMIER 소개</PrimaryMenuItemLink>
                    </PrimaryMenuItem>
                    <PrimaryMenuItem>
                        <PrimaryMenuItemLink href="https://www.altridedge.com/customer-service/faq">고객센터</PrimaryMenuItemLink>
                    </PrimaryMenuItem>
                    <PrimaryMenuItem>
                        <PrimaryMenuItemLink href="https://www.notion.so/optmier/Optmier-Help-Center-8e6f5fe90beb42f0a10cb9b11a84f22a">
                            이용약관 및 개인정보 보호정책
                        </PrimaryMenuItemLink>
                    </PrimaryMenuItem>
                </PrimaryMenusContainer>
                <SecondaryMenusContainer>
                    <SecondaryMenuItem>
                        <SecondaryMenuItemLink>옵트미어(Optmier)</SecondaryMenuItemLink>
                    </SecondaryMenuItem>
                    <SecondaryMenuItem>
                        <SecondaryMenuItemLink>대표 전광휘</SecondaryMenuItemLink>
                    </SecondaryMenuItem>
                    <SecondaryMenuItem>
                        <SecondaryMenuItemLink href="tel:02-446-1123">전화 02-446-1123</SecondaryMenuItemLink>
                    </SecondaryMenuItem>
                    <SecondaryMenuItem>
                        <SecondaryMenuItemLink href="mailto:rikjeon94@optmier.com">이메일 rikjeon94@optmier.com</SecondaryMenuItemLink>
                    </SecondaryMenuItem>
                    <SecondaryMenuItem>
                        <SecondaryMenuItemLink>사업자등록번호 307-87-02123</SecondaryMenuItemLink>
                    </SecondaryMenuItem>
                </SecondaryMenusContainer>
                <Address>서울시 광진구 뚝섬로41길 8 2층 (옵트미어 영수학원)</Address>
            </FooterContainer>
        </FooterRoot>
    );
}

export default Footer;
